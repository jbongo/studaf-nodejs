const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const Cv_experienceSchema = new Schema({

    user_id: {
        type: String,
        required: 'Entrez le user_id'
    },
    
    titre: {
        type: String,
    },
    description: {
        type: String,
    },
    nom_entreprise: {
        type: String,
    },
    date_deb: {
        type: String,
    },
    date_fin: {
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

module.exports = Cv_experienceSchema;
