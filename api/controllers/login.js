const Constant = require('../constants/constant');
const Sequelize = require('sequelize');
const Op = require('sequelize').Op;
const Result = require('../constants/result');
const mtblCustomerDB = require('../model/customerDB')
const mtblNhanVien = require('../model/nhanVien')
var database = require('../database');
let jwt = require('jsonwebtoken')
module.exports = {
    login: (req, res) => {
        let body = req.body;
        console.log(body);
        database.connectDBCustomer().then(async custommerDB => {
            if (custommerDB) {
                try {
                    let check = await mtblCustomerDB(custommerDB).findOne({
                        where: {
                            KeyLicense: body.key,
                            Status: 1
                        }
                    })
                    let dbName = '';
                    if (check) {
                        dbName = check.NameDB
                        let db = await database.connectDatabaseWithNameDB(dbName)
                        if (db) {
                            let staff = await mtblNhanVien(db).findOne({
                                where: {
                                    Username: body.userName,
                                    Password: body.password,
                                }
                            })
                            if (staff) {
                                var payload = {
                                        "Username": req.body.userName,
                                        // standard fields
                                        // - Xác thực người tạo
                                        "iss": "Tungnn",
                                    }
                                    // payload = { username: 'haidn', password: '123456a$' }
                                let token = jwt.sign(payload,
                                    'struck2022*#', { expiresIn: '30d' }
                                );
                                var result = {
                                    status: Constant.STATUS.SUCCESS,
                                    message: Constant.MESSAGE.LOGIN_SUCCESS,
                                    token: token
                                }
                                res.json(result);
                            } else {
                                var result = {
                                    status: Constant.STATUS.FAIL,
                                    message: 'Tên đăng nhập hoặc tài khoản không chính xác. Vui lòng đăng nhập lại!',
                                }
                                res.json(result);
                            }
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
                            message: Constant.MESSAGE.LOGIN_FAIL,
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