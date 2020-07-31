const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const Favori_offreSchema = new Schema({

    user_id: {
        type: String,
        required: 'Entrez le user_id'
    },
    offre_id: {
        type: String,
        required: 'Entrez le offre_id'
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