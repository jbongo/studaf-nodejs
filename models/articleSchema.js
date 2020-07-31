const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const ArticleSchema = new Schema({

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
    image: {
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