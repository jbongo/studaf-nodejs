const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const UserSchema = new Schema({

    email: {
        type: String,
        required: 'Entrez une adresse email'
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