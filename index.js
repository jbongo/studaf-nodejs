 express = require('express') ;
 routes = require('./routes/routes');

 mongoose = require('mongoose');
 bodyParser = require('body-parser');



app = express();
const PORT = 4000;


// connection a mongodb

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/studafdb', {
    useMongoClient: true
});

// bodyParser

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

routes(app);





//  Démarrage du serveur
app.listen(PORT, ()=>{

    console.log(`Démarrage du serveur sur le port ${PORT}`);
    
})
