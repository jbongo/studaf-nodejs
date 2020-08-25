UserController = require('../controllers/userController');


const routes = (app) => {

    app.route('/users')
        .get((req,res)=>{
            res.send('liste des candidats')
        })
        .post(UserController.register)

    
        app.route('/register')
            .post(UserController.register);
        
        app.route('/login')
            .post(UserController.login)
}


module.exports = routes;