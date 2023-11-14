const webServer = require('./server/webServer');
const path = require('path');

//Creation of the server
const server = webServer;

//link between http server (express) and websocket server
socketServer(server);
const port = 3000 || process.argv[0];

server.listen(3000, () => {
    console.log('Lancement du serveur : http://localhost:3000');
});