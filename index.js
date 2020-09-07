 express = require('express');
 routes = require('./routes/routes');

 mongoose = require('mongoose');
 bodyParser = require('body-parser');



 app = express();
 const PORT = 4000;


 // connection a mongodb

 mongoose.Promise = global.Promise;
 mongoose.connect('mongodb://localhost/studafdb', { useNewUrlParser: true });

 // bodyParser

 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json());

 // Add headers
 app.use(function(req, res, next) {

     // Website you wish to allow to connect
     res.header({
         'Access-Control-Allow-Origin': "http://127.0.0.1:3000",
         'Access-Control-Allow-Headers': "authorization,content-type",
         


     });


     next();
 });

 routes(app);





 //  Démarrage du serveur
 app.listen(PORT, () => {

     console.log(`Démarrage du serveur sur le port ${PORT}`);

 })