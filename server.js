const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Hello, NodeJS HTTP Server!</h1>');
    res.end();
});

const port = 3000;

server.listen(port, () => {
    console.log(`node js server running on port ${port}`);
});