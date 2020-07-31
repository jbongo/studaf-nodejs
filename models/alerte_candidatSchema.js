const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const Alerte_candidatSchema = new Schema({


    titre: {
        type: String,
        required: 'Entrez le titre'
    },
    poste: {
        type: String,
    },
    competences: {
        type: String,
    },
    sexe: {
        type: String,
    },

    pays: {
        type: String,

    },
    ville: {
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