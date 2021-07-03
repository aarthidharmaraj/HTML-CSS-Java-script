var server = require('ws').Server;
var s = new server({ port: 8082 });

s.on('connection', function(ws) {
    ws.on('message', function(message) {
        console.log("Received: " + message);

        s.clients.forEach(function e(client) {
            if (client != ws)
                client.send(message);
        });
    });
    ws.on('close', function() {
        console.log("Client lost");
    });
});