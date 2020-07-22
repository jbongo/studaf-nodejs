
const routes = (app) => {

    app.route('/candidats')
        .get((req,res)=>{
            res.send('liste des candidats')
        })
}


module.exports = routes;