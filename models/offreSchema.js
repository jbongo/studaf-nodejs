const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const OffreSchema = new Schema({

    user_id: {
        type: String,
        required: 'Entrez le id de l\'utilisateur '
    },
    categorie_offre_id: {
        type: String,
        required: 'Entrez le id de la categorie de l\'offre '
    },
    titre: {
        type: String,
        required: 'Entrez le titre '
    },
    description: {
        type: String,
        required: 'Entrez le description '
    },
    description_profil: {
        type: String,
    },
    sexe: {
        type: String,
    },
    salaire_min: {
        type: Number,
    },
    salaire_max: {
        type: Number,
    },
    experience_min: {
        type: Number,
    },
    experience_max: {
        type: Number,
    },

    competence_requise: {
        type: String,
    },
    pays: {
        type: String,
    },
    ville: {
        type: String,
    },
    date_expiration: {
        type: Date,

    },
    statut: {
        type: Boolean,
        default: 1
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

module.exports = OffreSchema;