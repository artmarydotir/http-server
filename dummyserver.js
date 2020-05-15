const http = require('http');
const path = require('path');
const fs = require('fs');
const uuid = require('uuid');

// create server
const server = http.createServer((req, res)=> {
    // / path 
    if(req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data)=> {
            if(err) throw err
           
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        })
    }
    // about path
    if(req.url === '/about') {
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, data)=> {
            if(err) throw err
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        })
    }
    // user api path
    if(req.url === '/api/users') {
        const users = [
            {
                name: 'mary',
                id: uuid.v4()
            },
            {
                name: 'akon',
                id: uuid.v4()
            }
        ];
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(users))
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, ()=> {
    console.log(`Server running on port: ${PORT}`)
});