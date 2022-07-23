import { WebSocket } from "ws";

const {wss} = require('../index.ts');

// move to users service
const users = [];

function onConnect(ws: WebSocket) {
    // save each user for future
    users.push(ws);
    console.log('all users amount' + ' ' + users.length)

    //connection is up, let's add a simple simple event
    ws.on('message', (message: string) => {
        //log the received message and send it back to the client
        console.log('received: %s', message);

        users.forEach((user) => user.send(`Hello, the last message: -> ${message}`));
    });

    //send immediatly a feedback to the incoming connection    
    ws.send('Hi there, I am a WebSocket server');
}

export {
    onConnect
}
