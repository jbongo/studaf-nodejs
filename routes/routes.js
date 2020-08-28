UserController = require('../controllers/userController');
offreController = require('../controllers/offreController');

auth = require('../middleware/auth')

const routes = (app) => {

    app.route('/user/profil')

    .get(auth, UserController.getUserProfile)


    app.route('/register')
        .post(UserController.register);

    app.route('/login')
        .post(UserController.login);



    // Les offres
    app.route('/recruteur/offre/add')
        .post(offreController.addOffre);
    app.route('/recruteur/offres')
        .get(offreController.getAllOffre);

}


module.exports = routes;