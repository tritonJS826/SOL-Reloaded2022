const EXPIRATION_TIME = '24h';

function generateAccessToken(user) {
    return jwt.sign(
        user,
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: EXPIRATION_TIME
        },
    );
}

module.exports = generateAccessToken;