 express = require('express');
 routes = require('./routes/routes');

 mongoose = require('mongoose');
 bodyParser = require('body-parser');



 app = express();
 const PORT = process.env.PORT || 4001;
 const ORIGIN_URL = process.env.ORIGIN_URL || "http://127.0.0.1:3000";


 // connection a mongodb

 mongoose.Promise = global.Promise;
//  const uri = 'mongodb://localhost/studafdb';
 const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://studaf:Motdepasse@01@cluster0.r4ktj.mongodb.net/studafdb?retryWrites=true&w=majority";
 mongoose.connect(MONGODB_URI, { 
     useNewUrlParser: true,
     useUnifiedTopology: true

});

 // bodyParser

 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json());

 // Add headers
 app.use(function(req, res, next) {

     // Website you wish to allow to connect
     res.header({
         'content-type': 'application/json',
         'Access-Control-Allow-Origin': ORIGIN_URL,
         'Access-Control-Allow-Headers': "authorization",
     });


     next();
 });

 routes(app);





 //  Démarrage du serveur
 app.listen(PORT, () => {

     console.log(`Démarrage du serveur sur le port ${PORT}`);

 })
