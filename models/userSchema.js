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
    type: {
        type: String,
        reuired: "entrez un type"
    },
    nom: {
        type: String,
    },
    prenom: {
        type: String,
    },
    poste: {
        type: String,
    },
    experience: {
        type: String,
    },
    date_naissance: {
        type: Date,
    },

    raison_sociale: {
        type: String,
    },
    date_creation_entreprise: {
        type: Date,
    }, 
    nb_salarie: {
        type: Number,
    },
    categorie: {
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
    contact1: {
        type: String,
        
    },
    contact2: {
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
    site_web: {
        type: String,
    },
    photo_profil: {
        type: String,
    },
    photo_couverture: {
        type: String,
    },

    date_creation: {
        type: Date,
        default: Date.now,
    },
    date_modification: {
        type: Date,
        default: Date.now,
    }
});


module.exports = UserSchema;
