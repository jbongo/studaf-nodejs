const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const Categorie_offreSchema = new Schema({

    nom: {
        type: String,
        required: 'Entrez le nom de la catégorie '
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