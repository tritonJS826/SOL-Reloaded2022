require('dotenv').config({path: "../.env"});
const express = require('express');
const http = require('http');
const WebSocketServer = require('ws').Server;

const {onConnect} = require('./services/ConnectService');

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server }); 

wss.on('connection', onConnect);

server.listen(process.env.QUIZ_MICROSERVICE_PORT, () => {
    console.log(`STUB RUNNING ON PORT ${server.address().port} mode ${process.env.NODE_ENV}`);
});

export {
    wss,
}

