const Result = require('./constants/result');
const Sequelize = require('sequelize');
const Constant = require('./constants/constant');
const mtblCustomer = require('../model/customer')
const mtblNhanVien = require('../model/nhanVien')
const mtblCustomerDB = require('../model/customerDB')
var database = require('../database');
module.exports = {
    addtblDMBoPhan: (req, res) => {
        let body = req.body;
        database.connectDBCustomer().then(async custommerDB => {
            if (custommerDB) {
                try {
                    let check = await mtblCustomerDB(custommerDB).findOne({
                        where: {
                            KeyLicense: body.Key,
                            Status: 1
                        }
                    })
                    let dbName = '';
                    if (check) {
                        dbName = check.NameDatabase
                        let db = await database.connectDatabaseWithNameDB(dbName)
                        if (db) {


                        } else {
                            var result = {
                                status: Constant.STATUS.FAIL,
                                message: "Tên cơ sở dữ liệu chưa đúng",
                            }
                            res.json(result);
                        }
                    } else {
                        var result = {
                            status: Constant.STATUS.FAIL,
                            message: "Đăng nhập thất bại",
                        }
                        res.json(result);

                    }
                } catch (error) {
                    console.log(error);
                    res.json(Result.SYS_ERROR_RESULT)
                }
            } else {
                res.json(Constant.MESSAGE.USER_FAIL)
            }
        })
    },

}