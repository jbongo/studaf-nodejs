UserController = require('../controllers/userController');


const routes = (app) => {

    app.route('/user/profil')

    .get(UserController.getUserProfile)


    app.route('/register')
        .post(UserController.register);

    app.route('/login')
        .post(UserController.login)
}


module.exports = routes;