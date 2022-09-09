module.exports = function(app) {
    var checkToken = require('./constants/token');
    var login = require('./controllers/login');
    app.route('/login').post(login.login);
    app.route('/loginDB').post(login.loginDB);
    app.route('/changePassword').post(login.changePassword);
    app.route('/getListCustomerDB').get(login.getListCustomerDB);

    var customerCtl = require('./controllers/customer')
    app.route('/cutomer/get_list_tblKhachHang').post(checkToken.checkToken, customerCtl.getListtblKhachHang);
    app.route('/cutomer/add_tblKhachHang').post(checkToken.checkToken, customerCtl.addtblKhachHang);
    app.route('/cutomer/update_tblKhachHang').post(checkToken.checkToken, customerCtl.updatetblKhachHang);
    app.route('/cutomer/delete_tblKhachHang').post(checkToken.checkToken, customerCtl.deletetblKhachHang);

}