const http = require('http');
const app = require('./app');

// Create an HTTP server using Express
const server = http.createServer(app);

// Listen on port 5500
const PORT = 5500;
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});