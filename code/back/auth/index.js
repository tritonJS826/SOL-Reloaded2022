require('dotenv').config({path: "../.env"});

const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
const generateAccessToken = require("./middlewares");

const PORT = 3000;

app.use(express.json());

let refreshTokens = [];
 
app.post('/token' ,(req, res) => {
    const refreshToken = req.body.token;
    if (!refreshToken) {
        return res.sendStatus(401);
    }

    if (!refreshTokens.includes(refreshToken)) {
        return res.sendStatus(403);
    }

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET,  (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }

        const accessToken = generateAccessToken({name: user.name});
        res.json({accessToken})
    });
});

app.post('/login', (req, res) => {
    const name = req.body.name;
    const user = { name };
    
    const accessToken = generateAccessToken(user);
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)

    refreshTokens.push(refreshToken);

    res.json({
        accessToken,
        refreshToken,
    })
});

app.delete('/logout', (req, res) => {
    console.log(123);
    refreshTokens.filter((token) => token !== req.body.token);
    res.sendStatus(204);
});

app.listen(PORT);

console.log(`Server start on port ${PORT}`);