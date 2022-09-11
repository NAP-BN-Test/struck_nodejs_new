module.exports = function(app) {
    var checkToken = require('./constants/token');
    var login = require('./controllers/login');
    app.route('/auth/login').post(login.login);
    app.route('/auth/loginDB').post(login.loginDB);
    app.route('/auth/changePassword').patch(login.changePassword);
    app.route('/auth/CustomerDB').get(login.getListCustomerDB);

    var customerCtl = require('./controllers/customer');
    app.route('/cutomer').get(checkToken.checkToken, customerCtl.getListtblKhachHang);
    app.route('/cutomer').post(checkToken.checkToken, customerCtl.addtblKhachHang);
    app.route('/cutomer').put(checkToken.checkToken, customerCtl.updatetblKhachHang);
    app.route('/cutomer').delete(checkToken.checkToken, customerCtl.deletetblKhachHang);

    var loaiVo = require('./controllers/loaivo');
    app.route('/shelltype').post(checkToken.checkToken, loaiVo.addLoaiVo);
    app.route('/shelltype').put(checkToken.checkToken, loaiVo.updateLoaiVo);
    app.route('/shelltype').delete(checkToken.checkToken, loaiVo.deleteLoaiVo);
    app.route('/shelltype').get(checkToken.checkToken, loaiVo.getListLoaiVo);
    // app.route('/tiretype').get(checkToken.checkToken, loaiVo.getListNameLoaiVo);

    var loaiXe = require('./controllers/loaixe');
    app.route('/cartype').post(checkToken.checkToken, loaiXe.addLoaiXe);
    app.route('/cartype').put(checkToken.checkToken, loaiXe.updateLoaiXe);
    app.route('/cartype').delete(checkToken.checkToken, loaiXe.deleteLoaiXe);
    app.route('/cartype').get(checkToken.checkToken, loaiXe.getListLoaiXe);
    // app.route('typecar').get(checkToken.checkToken, loaiXe.getListNameLoaiXe);

    var dmXeCongTy = require('./controllers/dmxecongty');
    app.route('/companycar').post(checkToken.checkToken, dmXeCongTy.addDMXeCongTy);
    app.route('/companycar').put(checkToken.checkToken, dmXeCongTy.updateDMXeCongTy);
    app.route('/companycar').delete(checkToken.checkToken, dmXeCongTy.deleteDMXeCongTy);
    app.route('/companycar').get(checkToken.checkToken, dmXeCongTy.getListDMXeCongTy);
    // app.route('companycar').get(checkToken.checkToken, dmXeCongTy.getListNameDMXeCongTy);

    var hangTau = require('./controllers/hangtau');
    app.route('/carriers').post(checkToken.checkToken, hangTau.addHangTau);
    app.route('/carriers').put(checkToken.checkToken, hangTau.updateHangTau);
    app.route('/carriers').delete(checkToken.checkToken, hangTau.deleteHangTau);
    app.route('/carriers').get(checkToken.checkToken, hangTau.getListHangTau);
    // app.route('/carriers').post(checkToken.checkToken, hangTau.getListNameHangTau);

    var phuongThucThanhToan = require('./controllers/phuongthucthanhtoan');
    app.route('/paymentmethods').post(checkToken.checkToken, phuongThucThanhToan.addPhuongThucThanhToan);
    app.route('/paymentmethods').put(checkToken.checkToken, phuongThucThanhToan.updatePhuongThucThanhToan);
    app.route('/paymentmethods').delete(checkToken.checkToken, phuongThucThanhToan.deletePhuongThucThanhToan);
    app.route('/paymentmethods').get(checkToken.checkToken, phuongThucThanhToan.getListPhuongThucThanhToan);
    // app.route('/ordertype').post(checkToken.checkToken, phuongThucThanhToan.getListNamePhuongThucThanhToan);

    var loaiNhanVien = require('./controllers/loainhanvien');
    app.route('/stafftype').post(checkToken.checkToken, loaiNhanVien.addLoaiNhanVien);
    app.route('/stafftype').put(checkToken.checkToken, loaiNhanVien.updateLoaiNhanVien);
    app.route('/stafftype').delete(checkToken.checkToken, loaiNhanVien.deleteLoaiNhanVien);
    app.route('/stafftype').get(checkToken.checkToken, loaiNhanVien.getListLoaiNhanVien);
    // app.route('/stafftype').get(checkToken.checkToken, loaiNhanVien.getListNameLoaiNhanVien);

    var loaiHinhVanChuyen = require('./controllers/loaihinhvanchuyen');
    app.route('/ordertype').post(checkToken.checkToken, loaiHinhVanChuyen.addLoaiHinhVanChuyen);
    app.route('/ordertype').post(checkToken.checkToken, loaiHinhVanChuyen.updateLoaiHinhVanChuyen);
    app.route('/ordertype').post(checkToken.checkToken, loaiHinhVanChuyen.getListLoaiHinhVanChuyen);
    app.route('/ordertype').post(checkToken.checkToken, loaiHinhVanChuyen.deleteLoaiHinhVanChuyen);

    var ctlTienTe = require('./controllers/ctlTienTe');
    app.route('/currency').post(checkToken.checkToken, ctlTienTe.addtblTienTe);
    app.route('/currency').put(checkToken.checkToken, ctlTienTe.updatetblTienTe);
    app.route('/currency').get(checkToken.checkToken, ctlTienTe.getListtblTienTe);
    app.route('/currency').delete(checkToken.checkToken, ctlTienTe.deletetblTienTe);

}