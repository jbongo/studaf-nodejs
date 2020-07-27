const mongoose = require('mongoose');
const UserSchema = require('../models/userSchema');

const User = mongoose.model('User', UserSchema);

const addUser = (req, res) => {
    let newUser = new User(req.body);

    newUser.save((err, user) => {
        if(err){
            res.send(err)
        }
        res.json(user);
    })
}

module.exports = addUser;

