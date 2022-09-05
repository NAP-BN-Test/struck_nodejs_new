const Sequelize = require('sequelize');

module.exports = function(db) {
    var table = db.define('tblKhachHang', {
        ID: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        IDPhuongPhapThanhToan: Sequelize.BIGINT,
        MaKhachHang: Sequelize.BIGINT,
        TenKhachHang: Sequelize.STRING,
        TenVietTat: Sequelize.STRING,
        LoaiKhachHang: Sequelize.STRING,
        Address: Sequelize.STRING,
        PhoneNumber: Sequelize.STRING,
        Email: Sequelize.STRING,
        CMT: Sequelize.STRING,
        Zalo: Sequelize.STRING,
        LoaiTinNhan: Sequelize.STRING,
        TrangThai: Sequelize.BOOLEAN,
        SoDuDauKy: Sequelize.FLOAT,
        HanMuc: Sequelize.FLOAT,
        IDCustomer: Sequelize.BIGINT,
        KeyConnect: Sequelize.STRING,
        // PhuongPhapThanhToan: Sequelize.STRING,
        // Contacts: Sequelize.STRING,
        // AccountBankings: Sequelize.STRING,
        // Khos: Sequelize.STRING,
        // Xes: Sequelize.STRING,
        // Zalos: Sequelize.STRING,

    });

    return table;
}