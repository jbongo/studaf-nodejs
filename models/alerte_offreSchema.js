const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const Alerte_offreSchema = new Schema({

    categorie_offre_id: {
        type: String,
        required: 'Entrez le categorie_offre_id'
    },
    titre: {
        type: String,
        required: 'Entrez le titre'
    },
    mot_recherche: {
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