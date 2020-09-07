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
      var  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZjRhNTNjNzk1ZmQxYjE5MDg1MjNmYmMiLCJpYXQiOjE1OTg3MDY3MjgsImV4cCI6MTU5ODcxMzkyOH0.AfRDOXyVKPM2M3-UZYtBmfB5lPwZQmuGolvIogplg5M"
        // var token = module.exports.parseAuthorization(authorisation);
return 10


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