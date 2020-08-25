var jwt = require('jsonwebtoken');

const JWT_SIGN_SECRET = 'nqjv2aFOzCaUDRqbLiBjZh3cnlXEVGYdgeDgpp8gGejFysKgQf98VgIH01voxCAFyOi4-G60EFmonM2yzVFHgN7xC-T9xUAOocqWg5z0SGdAB2w';
module.exports = {

    // On va générer le token jwt, grâce aux infos de l'utilisateur
    generateTokenForuser: function(userData) {

        return jwt.sign({
                userId: userData.id,
                type: userData.type,
            },
            JWT_SIGN_SECRET, {
                expiresIn: '2h'
            })
    },
    // on va parser l'autorisation réçu dans le header : AUthorisation afin de reccuperer uniquement le token
    parseAuthorization: function(authorisation) {
        return (authorisation != null) ? authorisation.replace('Bearer ', '') : null;
    },

    // On reccupère le user_id contenu dans le token
    getUserId: function(authorisation) {
        var userId = -1;
        var token = module.exports.parseAuthorization(authorisation);



        if (token != null) {
            try {

                var jwtToken = jwt.verify(token, JWT_SIGN_SECRET);
                if (jwtToken != null) {
                    userId = jwtToken.userId;
                }
            } catch (err) {

            }


        }
        return userId;
    }
}