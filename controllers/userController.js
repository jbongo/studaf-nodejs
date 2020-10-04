const mongoose = require('mongoose');
const UserSchema = require('../models/userSchema');
const bcrypt = require('bcrypt');
const jwtUtils = require('../utils/jwt.utils');

const User = mongoose.model('User', UserSchema);
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const register = (req, res) => {

    const email = req.body.email;
    const password = req.body.password;
    const type = req.body.type;
    // const nom = req.body.nom;
    // const prenom = req.body.prenom;
    // const poste = req.body.poste;
    // const experience = req.body.experience;
    // const date_naissance = req.body.date_naissance;
    // const raison_sociale = req.body.raison_sociale;
    // const date_creation_entreprise = req.body.date_creation_entreprise;
    // const nb_salarie = req.body.nb_salarie;
    // const categorie = req.body.categorie;
    // const pays = req.body.pays;
    // const ville = req.body.ville;
    // const description = req.body.description;
    // const contact1 = req.body.contact1;
    // const contact2 = req.body.contact2;
    // const facebook = req.body.facebook;
    // const twitter = req.body.twitter;
    // const linkedin = req.body.linkedin;
    // const site_web = req.body.site_web;
    // const photo_profil = req.body.photo_profil;
    // const photo_couverture = req.body.photo_couverture;
    // const date_creation = req.body.date_creation;
    // const date_modification = req.body.date_modification;


    // B+Vérificatioins des valeurs saisies

    if (!EMAIL_REGEX.test(email)) {
        return res.status(409).json({ 'error': "Adresse mail incorrecte" });

    }

    User.findOne({
            email: req.body.email
        })
        .then(function(user) {

            if (!user) {

                bcrypt.hash(password, 5, function(err, bcryptpassword) {
                    let newUser = new User({

                        email: email,
                        password: bcryptpassword,
                        type: type,
                        // nom: nom,
                        // prenom: prenom,
                        // poste: poste,
                        // experience: experience,
                        // date_naissance: date_naissance,
                        // raison_sociale: raison_sociale,
                        // date_creation_entreprise: date_creation_entreprise,
                        // nb_salarie: nb_salarie,
                        // categorie: categorie,
                        // pays: pays,
                        // ville: ville,
                        // description: description,
                        // contact1: contact1,
                        // contact2: contact2,
                        // facebook: facebook,
                        // twitter: twitter,
                        // linkedin: linkedin,
                        // site_web: site_web,
                        // photo_profil: photo_profil,
                        // photo_couverture: photo_couverture,
                        // date_creation: date_creation,
                        // date_modification: date_modification,

                    });

                    newUser.save((err, user) => {
                        if (err) {
                            res.status(500).json({ 'error': err });
                            return;
                        }
                        res.status(201).json({ user });
                        return;
                    });
                });
            } else {
                 res.status(200).json({ 'error': "l\'adresse mail existe déjà" });
                 return;

            }

        })
        .catch(function(err) {
            return res.status(500).json({ 'error': err });

        });
}






// ### Fonction de connexion

const login = (req, res) => {

    var email = req.body.email;
    var password = req.body.password;

    if (email == null || password == null) {
        return res.status(400).json({ 'error': 'Enrez correctement vos identifiants' });
    }


    User.findOne({
            email: req.body.email
        })
        .then(function(user) {

            if (user) {

                bcrypt.compare(password, user.password, function(errBcrypt, resBcrypt) {

                    if (resBcrypt) {

                        return res.status(200).json({
                            'userId': user.id,
                            'token': jwtUtils.generateTokenForuser(user)
                        });
                    } else {
                        return res.status(403).json({ 'error': 'Mot de passe invalide' });
                    }
                });


            } else {
                return res.status(400).json({ 'error': "Ce compte n\'existe pas" });
            }

        })
        .catch(function(err) {
            return res.status(500).json({ 'error': err });

        });

}




// On réccupère le profil du user si le token est valide
const getUserProfile = (req, res) => {

    var headerAutho = req.headers['authorization'];
    var userId = jwtUtils.getUserId(headerAutho);


    if (userId < 0) {
        return res.status(400).json({ 'error': "token incorrect" });
    }



    User.findOne({ _id: userId }, function(err, userfound) {

        if (userfound) {

            return res.send(userfound)
        } else {

            return res.send("user non trouvé " + userId)
        }
    })
}


// Mettre à jour ou ajouter le profil du candidat
const updateCandidatProfil = (req, res) => {

    var headerAutho = req.headers['authorization'];
    var userId = jwtUtils.getUserId(headerAutho);


    if (userId < 0) {
        return res.status(400).json({ 'error': "token incorrect" });
    }


    const email = req.body.email;

    const nom = req.body.nom;
    const prenom = req.body.prenom;
    const poste = req.body.poste;
    const experience = req.body.experience;
    const date_naissance = req.body.date_naissance;

    const pays = req.body.pays;
    const ville = req.body.ville;
    const description = req.body.description;
    const contact = req.body.contact;

    const facebook = req.body.facebook;
    const twitter = req.body.twitter;
    const linkedin = req.body.linkedin;
    const site_web = req.body.site_web;

    const photo_profil = req.body.photo_profil;
    const photo_couverture = req.body.photo_couverture;
    const date_creation = req.body.date_creation;
    const date_modification = req.body.date_modification;


    // B+Vérificatioins des valeurs saisies

    if (!EMAIL_REGEX.test(email)) {
        return res.status(409).json({ 'error': "Adresse mail incorrecte" });

    }

    let updatedUser = {

        email: email,

        nom: nom,
        prenom: prenom,
        poste: poste,
        experience: experience,
        date_naissance: date_naissance,

        pays: pays,
        ville: ville,
        description: description,
        contact1: contact,

        facebook: facebook,
        twitter: twitter,
        linkedin: linkedin,
        site_web: site_web,
        photo_profil: photo_profil,
        photo_couverture: photo_couverture,
        date_creation: date_creation,
        date_modification: date_modification,

    };

    User.findByIdAndUpdate({ _id: userId }, updatedUser, function(err, user) {

            if (!err) {

                res.status(201).json({ user });
                return;
                // })

            } else {
                return res.status(409).json({ 'error': "Cet utilisateur n\'existe pas" });

            }

        })
        .catch(function(err) {
            return res.status(500).json({ 'error': err });

        });
}



module.exports = {
    register,
    login,
    getUserProfile,
    updateCandidatProfil
};