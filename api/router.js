module.exports = function(app) {
    var checkToken = require('./constants/token');
    var login = require('./controllers/login');
    app.route('/login').post(login.login);
    app.route('/loginDB').post(login.loginDB);
    app.route('/changePassword').post(login.changePassword);
    app.route('/getListCustomerDB').get(login.getListCustomerDB);

    var customerCtl = require('./controllers/customer');
    app.route('/cutomer/get_list_tblKhachHang').post(checkToken.checkToken, customerCtl.getListtblKhachHang);
    app.route('/cutomer/add_tblKhachHang').post(checkToken.checkToken, customerCtl.addtblKhachHang);
    app.route('/cutomer/update_tblKhachHang').post(checkToken.checkToken, customerCtl.updatetblKhachHang);
    app.route('/cutomer/delete_tblKhachHang').post(checkToken.checkToken, customerCtl.deletetblKhachHang);

    var loaiVo = require('./controllers/loaivo');
    app.route('/loaivo/add_Loaivo').post(checkToken.checkToken, loaiVo.addLoaiVo);
    app.route('/loaivo/update_Loaivo').post(checkToken.checkToken, loaiVo.updateLoaiVo);
    app.route('/loaivo/delete_Loaivo').post(checkToken.checkToken, loaiVo.deleteLoaiVo);
    app.route('/loaivo/get_list_Loaivo').post(checkToken.checkToken, loaiVo.getListLoaiVo);
    app.route('/loaivo/get_list_name_Loaivo').post(checkToken.checkToken, loaiVo.getListNameLoaiVo);

    var loaiXe = require('./controllers/loaixe');
    app.route('/loaixe/add_Loaixe').post(checkToken.checkToken, loaiXe.addLoaiXe);
    app.route('/loaixe/update_Loaixe').post(checkToken.checkToken, loaiXe.updateLoaiXe);
    app.route('/loaixe/delete_loaixe').post(checkToken.checkToken, loaiXe.deleteLoaiXe);
    app.route('/loaixe/get_list_loaixe').post(checkToken.checkToken, loaiXe.getListLoaiXe);
    app.route('/loaixe/get_list_name_loaixe').post(checkToken.checkToken, loaiXe.getListNameLoaiXe);

    var dmXeCongTy = require('./controllers/dmxecongty');
    app.route('/dmXeCongTy/add_DMXeCongTy').post(checkToken.checkToken, dmXeCongTy.addDMXeCongTy);
    app.route('/dmXeCongTy/update_DMXeCongTy').post(checkToken.checkToken, dmXeCongTy.updateDMXeCongTy);
    app.route('/dmXeCongTy/delete_DMXeCongTy').delete(checkToken.checkToken, dmXeCongTy.deleteDMXeCongTy);
    app.route('/dmXeCongTy/get_list_DMXeCongTy').get(checkToken.checkToken, dmXeCongTy.getListDMXeCongTy);
    app.route('/dmXeCongTy/get_list_name_DMXeCongTy').get(checkToken.checkToken, dmXeCongTy.getListNameDMXeCongTy);

    var hangTau = require('./controllers/hangtau');
    app.route('/hangTau/add_HangTau').post(checkToken.checkToken, hangTau.addHangTau);
    app.route('/hangTau/update_HangTau').post(checkToken.checkToken, hangTau.updateHangTau);
    app.route('/hangTau/delete_HangTau').post(checkToken.checkToken, hangTau.deleteHangTau);
    app.route('/hangTau/get_list_HangTau').post(checkToken.checkToken, hangTau.getListHangTau);
    app.route('/hangTau/get_list_name_HangTau').post(checkToken.checkToken, hangTau.getListNameHangTau);

    var phuongThucThanhToan = require('./controllers/phuongthucthanhtoan');
    app.route('/phuongThucThanhToan/add_PhuongThucThanhToan').post(checkToken.checkToken, phuongThucThanhToan.addPhuongThucThanhToan);
    app.route('/phuongThucThanhToan/update_PhuongThucThanhToan').post(checkToken.checkToken, phuongThucThanhToan.updatePhuongThucThanhToan);
    app.route('/phuongThucThanhToan/delete_PhuongThucThanhToan').post(checkToken.checkToken, phuongThucThanhToan.deletePhuongThucThanhToan);
    app.route('/phuongThucThanhToan/get_list_PhuongThucThanhToan').post(checkToken.checkToken, phuongThucThanhToan.getListPhuongThucThanhToan);
    app.route('/phuongThucThanhToan/get_list_name_PhuongThucThanhToan').post(checkToken.checkToken, phuongThucThanhToan.getListNamePhuongThucThanhToan);

    var loaiNhanVien = require('./controllers/loainhanvien');
    app.route('/loaiNhaVien/add_LoaiNhanVien').post(checkToken.checkToken, loaiNhanVien.addLoaiNhanVien);
    app.route('/loaiNhaVien/update_LoaiNhanVien').post(checkToken.checkToken, loaiNhanVien.updateLoaiNhanVien);
    app.route('/loaiNhaVien/delete_LoaiNhanVien').post(checkToken.checkToken, loaiNhanVien.deleteLoaiNhanVien);
    app.route('/loaiNhaVien/get_list_LoaiNhanVien').post(checkToken.checkToken, loaiNhanVien.getListLoaiNhanVien);
    app.route('/loaiNhaVien/get_list_name_LoaiNhanVien').post(checkToken.checkToken, loaiNhanVien.getListNameLoaiNhanVien);

    var loaiHinhVanChuyen = require('./controllers/loaihinhvanchuyen');
    app.route('/loaiHinhVanChuyen/add_LoaiHinhVanChuyen').post(checkToken.checkToken, loaiHinhVanChuyen.addLoaiHinhVanChuyen);
    app.route('/loaiHinhVanChuyen/update_LoaiHinhVanChuyen').post(checkToken.checkToken, loaiHinhVanChuyen.updateLoaiHinhVanChuyen);
    app.route('/loaiHinhVanChuyen/get_list_LoaiHinhVanChuyen').post(checkToken.checkToken, loaiHinhVanChuyen.getListLoaiHinhVanChuyen);
    app.route('/loaiHinhVanChuyen/delete_LoaiHinhVanChuyen').post(checkToken.checkToken, loaiHinhVanChuyen.deleteLoaiHinhVanChuyen);

}