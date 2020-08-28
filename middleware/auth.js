const jwt = require('jsonwebtoken');
const util = require('../utils/jwt.utils')


module.exports = (req, res, next) => {

    try {

        // on reccupere le token en supprimant la  chainie Bearer dans le authorisation  
        // const token = req.headers.authorization.split(' ')[1];

        // const decodedToken = jwt.verify(token, JWT_SIGN_SECRET);
        // console.log(decodedToken);

        // const userId = decodedToken.userId;

        const userId = util.getUserId(req.headers.authorization);


        if (req.body.userId && req.body.userId !== userId) {
            throw 'Utilisateur Inconnu';

        } else {
            next();
        }

    } catch {
        res.status(401).json({
            error: new Error('Requête invalide')
        });
    }
};