 UserController = require('../controllers/userController');
const routes = (app) => {

    app.route('/users')
        .get((req,res)=>{
            res.send('liste des candidats')
        })
        .post(UserController)
}


module.exports = routes;