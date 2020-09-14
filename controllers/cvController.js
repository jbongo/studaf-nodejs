const mongoose = require('mongoose');
const CvFormationSchema = require('../models/cv_formationSchema');
const CvExperienceSchema = require('../models/cv_experienceSchema');

const jwtUtils = require('../utils/jwt.utils');

const CvFormation = mongoose.model('Cv_formation', CvFormationSchema);
const CvExperience = mongoose.model('Cv_experience', CvExperienceSchema);




// ############################### FORMATIONS  ###############################

// ###### Ajout d'une formation dans le CV
// 
const addFormation = (req, res) => {

    var headerAutho = req.headers['authorization'];

    var userId = jwtUtils.getUserId(headerAutho);
    


    if (userId < 0) {
        return res.status(400).json({ 'error': "token incorrect" });
    }


    const user_id = userId;
    const libelle = req.body.libelle;
    const description = req.body.description;
    const ets = req.body.ets;
    const date_deb = req.body.date_deb;
    const date_fin = req.body.date_fin;



    let cv_formation = new CvFormation({

        user_id: user_id,
        libelle: libelle,
        description: description,
        ets: ets,
        date_deb: date_deb,
        date_fin: date_fin,


    });

    cv_formation.save((err, cv_formation) => {
        if (err) {
            res.status(500).json({ 'error': err });
            return;
        }
        res.status(201).json({ cv_formation });
        return;
    })




}

// ###### Modification d'une formation dans le CV
// 

const updateFormation = (req, res) => {

    var headerAutho = req.headers['authorization'];
    var userId = jwtUtils.getUserId(headerAutho);


    if (userId < 0) {
        return res.status(400).json({ 'error': "token incorrect" });
    }


    const libelle = req.body.libelle;
    const description = req.body.description;
    const ets = req.body.ets;
    const date_deb = req.body.date_deb;
    const date_fin = req.body.date_fin;


    const CvFormation_id = req.params.cv_formation_id;

    let cv_formation =  {
        libelle: libelle,
        description: description,
        ets: ets,
        date_deb: date_deb,
        date_fin: date_fin,
        date_modification: Date.now()


    };

    console.log(CvFormation_id);

    CvFormation.findByIdAndUpdate({_id: CvFormation_id }, cv_formation, function(err, CvFormationsupdated) {

        if (!err) {

       
            return res.status(201).json({ 'data' : CvFormationsupdated })
        } else {

            return res.status(401).json({ 'data' : 'Aucune formation modifiée' });
        } 
    })
}


// ###### Suppression d'une formation du CV

const deleteFormation = (req, res) => {

    var headerAutho = req.headers['authorization'];
    var userId = jwtUtils.getUserId(headerAutho);


    if (userId < 0) {
        return res.status(400).json({ 'error': "token incorrect" });
    }


    const CvFormation_id = req.params.cv_formation_id;

    CvFormation.findOneAndDelete({ _id: CvFormation_id }, function(err, CvFormation_deleted) {

        if (CvFormation_deleted) {
            return res.status(201).json({ 'data' : 'Formation supprimée' })
        } else {
            return res.status(401).json({ 'data' : 'Aucune formation suprrimée' });
        } 
    })
}



// ######## Réccupérrer une formation du CV
const getFormation = (req, res) => {

    var headerAutho = req.headers['authorization'];
    var userId = jwtUtils.getUserId(headerAutho);


    if (userId < 0) {
        return res.status(400).json({ 'error': "token incorrect" });
    }

    const CvFormation_id = req.params.cv_formation_id;


    CvFormation.findOne({_id: CvFormation_id }, function(err, CvFormationsfound) {

        if (CvFormationsfound) {

            console.log(CvFormationsfound[0]);
            return res.status(201).json({ 'data' : CvFormationsfound })
        } else {

            return res.send("Aucune Formation trouvée")
        } 
    })
}



// ######## Réccupérrer toutes les formations d'un CV
const getAllFormations = (req, res) => {

    var headerAutho = req.headers['authorization'];
    var userId = jwtUtils.getUserId(headerAutho);


    if (userId < 0) {
        return res.status(400).json({ 'error': "token incorrect" });
    }


    CvFormation.find({user_id: userId }, function(err, CvFormationsfound) {

        if (CvFormationsfound) {

            console.log(CvFormationsfound[0]);
            return res.status(201).json({ 'data' : CvFormationsfound })
        } else {

            return res.send("Aucune Formation trouvée")
        } 
    })
}


// ############################### EXPERIENCES PROFESSIONNELLES  ###############################

// ###### Ajout d'une experience dans le CV
// 
const addExperience = (req, res) => {

    var headerAutho = req.headers['authorization'];

    var userId = jwtUtils.getUserId(headerAutho);
    


    if (userId < 0) {
        return res.status(400).json({ 'error': "token incorrect" });
    }



    const user_id = userId;
    const titre = req.body.titre;
    const description = req.body.description;
    const nom_entreprise = req.body.nom_entreprise;
    const date_deb = req.body.date_deb;
    const date_fin = req.body.date_fin;



    let cv_experience = new CvExperience({

        user_id: user_id,
        titre: titre,
        description: description,
        nom_entreprise: nom_entreprise,
        date_deb: date_deb,
        date_fin: date_fin,


    });

    cv_experience.save((err, cv_experience) => {
        if (err) {
            res.status(500).json({ err });
            return;
        }
        res.status(201).json({ cv_experience });
        return;
    })




}

// ###### Modification d'une experience dans le CV
// 

const updateExperience = (req, res) => {

    var headerAutho = req.headers['authorization'];
    var userId = jwtUtils.getUserId(headerAutho);


    if (userId < 0) {
        return res.status(400).json({ 'error': "token incorrect" });
    }


    const titre = req.body.titre;
    const description = req.body.description;
    const nom_entreprise = req.body.nom_entreprise;
    const date_deb = req.body.date_deb;
    const date_fin = req.body.date_fin;


    const CvExperience_id = req.params.cv_experience_id;

    let cv_experience =  {
        titre: titre,
        description: description,
        nom_entreprise: nom_entreprise,
        date_deb: date_deb,
        date_fin: date_fin,
        date_modification: Date.now()


    };

    CvExperience.findByIdAndUpdate({_id: CvExperience_id }, cv_experience, function(err, CvExperiencesupdated) {

        if (!err) {

       
            return res.status(201).json({ 'data' : CvExperiencesupdated })
        } else {

            return res.status(401).json({ 'data' : 'Aucune experience modifiée' });
        } 
    })
}


// ###### Suppression d'une experience du CV

const deleteExperience = (req, res) => {

    var headerAutho = req.headers['authorization'];
    var userId = jwtUtils.getUserId(headerAutho);


    if (userId < 0) {
        return res.status(400).json({ 'error': "token incorrect" });
    }


    const CvExperience_id = req.params.cv_experience_id;

    CvExperience.findOneAndDelete({ _id: CvExperience_id }, function(err, CvExperience_deleted) {

        if (CvExperience_deleted) {
            return res.status(201).json({ 'data' : 'Experience supprimée' })
        } else {
            return res.status(401).json({ 'data' : 'Aucune experience suprrimée' });
        } 
    })
}



// ######## Réccupérrer une experience du CV
const getExperience = (req, res) => {

    var headerAutho = req.headers['authorization'];
    var userId = jwtUtils.getUserId(headerAutho);


    if (userId < 0) {
        return res.status(400).json({ 'error': "token incorrect" });
    }

    const CvExperience_id = req.params.cv_experience_id;


    CvExperience.findOne({_id: CvExperience_id }, function(err, CvExperiencesfound) {

        if (CvExperiencesfound) {

            console.log(CvExperiencesfound[0]);
            return res.status(201).json({ 'data' : CvExperiencesfound })
        } else {

            return res.send("Aucune Experience trouvée")
        } 
    })
}



// ######## Réccupérrer toutes les experiences d'un CV
const getAllExperiences = (req, res) => {

    var headerAutho = req.headers['authorization'];
    var userId = jwtUtils.getUserId(headerAutho);


    if (userId < 0) {
        return res.status(400).json({ 'error': "token incorrect" });
    }


    CvExperience.find({user_id: userId }, function(err, CvExperiencesfound) {

        if (CvExperiencesfound) {

            console.log(CvExperiencesfound[0]);
            return res.status(201).json({ 'data' : CvExperiencesfound })
        } else {

            return res.send("Aucune Experience trouvée")
        } 
    })
}





module.exports = {
    addFormation,
    updateFormation,
    deleteFormation,
    getFormation,
    getAllFormations,

    addExperience,
    updateExperience,
    deleteExperience,
    getExperience,
    getAllExperiences,
};