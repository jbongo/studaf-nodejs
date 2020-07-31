const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const Cv_formationSchema = new Schema({

    cv_id: {
        type: String,
        required: 'Entrez le cv_id'
    },
    
    libelle: {
        type: String,
    },
    description: {
        type: String,
    },
    ets: {
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