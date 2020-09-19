UserController = require('../controllers/userController');
offreController = require('../controllers/offreController');
cvController = require('../controllers/cvController');

auth = require('../middleware/auth')

const routes = (app) => {

    app.get('/', (req,res)=> {
        return res.send('hello')
    });


    app.route('/user/profil')

    .get(auth, UserController.getUserProfile)
        .post(auth, UserController.updateCandidatProfil)


    app.route('/register')
        .post(UserController.register);

    app.route('/login')
        .post(UserController.login);



    // Les offres
    app.route('/recruteur/offre/add')
        .post(offreController.addOffre);
    app.route('/recruteur/offres')
        .get(offreController.getAllOffre);



    // Les CV
    // Les formations

    app.post('/cv/formation/add', cvController.addFormation);
    app.post('/cv/formation/update/:cv_formation_id', cvController.updateFormation);
    app.delete('/cv/formation/delete/:cv_formation_id', cvController.deleteFormation);
    app.get('/cv/formation/:cv_formation_id', cvController.getFormation);
    app.get('/cv/formations', cvController.getAllFormations);
       
    // Les experiences professionnelles

    app.post('/cv/experience/add', cvController.addExperience);
    app.post('/cv/experience/update/:cv_experience_id', cvController.updateExperience);
    app.delete('/cv/experience/delete/:cv_experience_id', cvController.deleteExperience);
    app.get('/cv/experience/:cv_experience_id', cvController.getExperience);
    app.get('/cv/experiences', cvController.getAllExperiences);

    // Les compétences 

    // app.post('/cv/add/competence', cvController.addCompetence);
    // app.update('/cv/update/competence', cvController.updateCompetence);
    // app.delete('/cv/delete/competence', cvController.deleteCompetence);
    // app.get('/cv/competences', cvController.getCompetence);


}


module.exports = routes;