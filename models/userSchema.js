const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const UserSchema = new Schema({

    email: {
        type: String,
        required: 'Entrez une adresse email'
    },
    password: {
        type: String,
        required: 'Entrez un mot de passe'
    },
    token: {
        type: String,
        required: 'token absent'
    },
    contact1: {
        type: String,
        
    },
    contact2: {
        type: String,
        
    },
    nom: {
        type: String,
        required: 'Entrez un nom'
    },
    prenom: {
        type: String,
        required: 'Entrez un prenom'
    },
    raison_sociale: {
        type: String,
        required: 'Entrez un prenom'
    },
    poste: {
        type: String,
        required: 'Entrez une  '
    },
    experience: {
        type: String,
        required: 'Entrez votre expérience'
    },
    date_naissance: {
        type: String,
       
    },
    pays: {
        type: String,
       
    },
    ville: {
        type: String,
     
    },
    description: {
        type: String,
        
    },
    facebook: {
        type: String,
      
    },
    twitter: {
        type: String,
       
    },
    linkedin: {
        type: String,
    },
    date_creation: {
        type: Date,
    },
    date_modification: {
        type: Date,
    }
});


module.exports = UserSchema;
