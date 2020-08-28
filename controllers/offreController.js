const mongoose = require('mongoose');
const OffreSchema = require('../models/offreSchema');

const jwtUtils = require('../utils/jwt.utils');

const Offre = mongoose.model('Offre', OffreSchema);


const addOffre = (req, res) => {


    var headerAutho = req.headers['authorization'];
    var userId = jwtUtils.getUserId(headerAutho);


    if (userId < 0) {
        return res.status(400).json({ 'error': "token incorrect" });
    }
    const user_id = userId;
    const categorie_offre_id = req.body.categorie_offre_id;
    const titre = req.body.titre;
    const description = req.body.description;
    const description_profil = req.body.description_profil;
    const sexe = req.body.sexe;
    const salaire_min = req.body.salaire_min;
    const salaire_max = req.body.salaire_max;
    const experience_min = req.body.experience_min;
    const experience_max = req.body.experience_max;
    const competence_requise = req.body.competence_requise;
    const pays = req.body.pays;
    const ville = req.body.ville;
    const date_expiration = req.body.date_expiration;


    let newoffre = new Offre({

        user_id: user_id,
        categorie_offre_id: categorie_offre_id,
        titre: titre,
        description: description,
        description_profil: description_profil,
        sexe: sexe,
        salaire_min: salaire_min,
        salaire_max: salaire_max,
        experience_min: experience_min,
        experience_max: experience_max,
        competence_requise: competence_requise,
        pays: pays,
        ville: ville,
        date_expiration: date_expiration,

    });

    newoffre.save((err, offre) => {
        if (err) {
            res.status(500).json({ 'error': err });
            return;
        }
        res.status(201).json({ offre });
        return;
    })




}


// ### Fonction de connexion



// On réccupère le profil du user si le token est valide

const getAllOffre = (req, res) => {

    var headerAutho = req.headers['authorization'];
    var userId = jwtUtils.getUserId(headerAutho);


    if (userId < 0) {
        return res.status(400).json({ 'error': "token incorrect" });
    }



    Offre.find({ user_id: userId }, function(err, offresfound) {

        if (offresfound) {

            return res.send(offresfound)
        } else {

            return res.send("Aucune offre trouvée")
        }
    })
}






module.exports = {
    addOffre,
    getAllOffre
};