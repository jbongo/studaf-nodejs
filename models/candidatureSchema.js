const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const UserSchema = new Schema({

    user_id: {
        type: String,
        required: 'Entrez le id de l\'utilisateur '
    },
    offre_id: {
        type: String,
        required: 'Entrez le id de l\'offre '
    },
    cv: {
        type: String,
    },
    lettre_motivation: {
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