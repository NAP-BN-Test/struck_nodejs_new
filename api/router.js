module.exports = function(app) {
    var checkToken = require('./constants/token');
    var login = require('./controllers/login');
    app.route('/login').post(login.login);
    app.route('/loginDB').post(login.loginDB);
    app.route('/changePassword').post(login.changePassword);
    app.route('/getListCustomerDB').get(login.getListCustomerDB);
}