const net = require('net');

// Define the host and port
const HOST = '127.0.0.1'; // localhost
const PORT = 3000; // Port to listen on

// Create the server
const server = net.createServer(function (socket) {
    console.log(`Connection established with client at ${socket.remoteAddress}`);

    socket.on('data', (binaryData) => {
        const string = binaryData + ''; 
        console.log(string); 
        socket.write(string); 
        // socket.end(); 

    })

    socket.on('close' , () => {
        socket.write("Terminating Connection"); 
        console.log("Terminating Connection ")
        socket.end(); 
    })


});

// Start listening for connections
server.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
});
