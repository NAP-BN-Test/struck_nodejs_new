const Sequelize = require('sequelize');

module.exports = function(db) {
    var table = db.define('tblNhanVien', {
        ID: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        IDLoaiNhanVien: Sequelize.BIGINT,
        TemNhanVien: Sequelize.STRING,
        MaNhanVien: Sequelize.STRING,
        PhoneNumber: Sequelize.STRING,
        Birthday: Sequelize.STRING,
        Gender: Sequelize.STRING,
        Address: Sequelize.STRING,
        Username: Sequelize.STRING,
        Password: Sequelize.STRING,
        // DBName: Sequelize.STRING,

    });

    return table;
}