require('dotenv').config({path: '../.env'});

const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();

app.use(express.json());

const posts = [
    {
        name: '1',
        title: 'title_1',
    },
    {
        name: '2',
        title: 'title_2',
    }
];

app.get('/posts', authentication, (req, res) => {
    res.json(posts.filter(post => post.name === req.user.name));
});

function authentication(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader?.split(' ')[1];

    if (!token) {
        return res.sendStatus(401);
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            return  res.sendStatus(403); // invalid token
        }

        req.user = user;
        next();
    })
};

const PORT = 4000; 

app.listen(PORT);

console.log(`STATIC_SERVER start on port ${PORT}`);
