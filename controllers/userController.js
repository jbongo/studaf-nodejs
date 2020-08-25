const mongoose = require('mongoose');
const UserSchema = require('../models/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = mongoose.model('User', UserSchema);


const register = (req, res) => {

    const email = req.body.email;
    const password = req.body.password;
    const type = req.body.type;
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    const poste = req.body.poste;
    const experience = req.body.experience;
    const date_naissance = req.body.date_naissance;
    const raison_sociale = req.body.raison_sociale;
    const date_creation_entreprise = req.body.date_creation_entreprise;
    const nb_salarie = req.body.nb_salarie;
    const categorie = req.body.categorie;
    const pays = req.body.pays;
    const ville = req.body.ville;
    const description = req.body.description;
    const contact1 = req.body.contact1;
    const contact2 = req.body.contact2;
    const facebook = req.body.facebook;
    const twitter = req.body.twitter;
    const linkedin = req.body.linkedin;
    const site_web = req.body.site_web;
    const photo_profil = req.body.photo_profil;
    const photo_couverture = req.body.photo_couverture;
    const date_creation = req.body.date_creation;
    const date_modification = req.body.date_modification;
    
  

    User.findOne({
        email: req.body.email
    }, function(err, user){

        if(err){
            if(err){
              return  res.status(500).json({'error': err});
            }
        }

        if(user){
            return res.json(user);
            return res.status(409).json({'error': "l\'adresse mail existe déjà"});
        }
       
    });

    bcrypt.hash(password, 5, function(err, bcryptpassword){
        let newUser = new User({

            email : email,
            password : bcryptpassword,
            type : type,
            nom : nom,
            prenom : prenom,
            poste : poste,
            experience : experience,
            date_naissance : date_naissance,
            raison_sociale : raison_sociale,
            date_creation_entreprise : date_creation_entreprise,
            nb_salarie : nb_salarie,
            categorie : categorie,
            pays : pays,
            ville : ville,
            description : description,
            contact1 : contact1,
            contact2 : contact2,
            facebook : facebook,
            twitter : twitter,
            linkedin : linkedin,
            site_web : site_web,
            photo_profil : photo_profil,
            photo_couverture : photo_couverture,
            date_creation : date_creation,
            date_modification : date_modification,
           
        } 
        );

        newUser.save((err, user) => {
            if(err){
                return  res.status(500).json({'error': err});
            }
                return res.status(200).json({user});
        })
    });
  
    return "ok";
    console.log("hii");
    
}

const login = (req,res) => {
    res.send("login du user")
}

module.exports = {
    register,
    login
};

