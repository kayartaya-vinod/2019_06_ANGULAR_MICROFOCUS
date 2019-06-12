const bodyParser = require('body-parser');
const jsonServer = require('json-server');
const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');

const server = jsonServer.create();
const secretKey = 'topsecret';

server.use((req, resp, next) => {
    if (req.method === 'POST') {
        if (req.headers.authorization === undefined ||
            req.headers.authorization.split(' ')[0] !== 'Bearer') {
            const status = 401
            const message = 'Bad authorization header'
            resp.status(status).json({ status, message })
            return
        }

        let token = req.headers.authorization.split(' ')[1];
        try {
            let user = jwt.verify(token, secretKey);
            console.log(user);
            next();
        }
        catch (err) {
            const status = 401
            const message = 'Error: access_token is not valid'
            resp.status(status).json({ status, message, token })
        }
    }
    console.log(req.url);
    console.log(req.path);
    next();
});

server.use(express.static(path.join(__dirname, 'data')))
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

const router = jsonServer.router('./db/data.json');
server.use(router);


server.listen(4000, () => {
    console.log('REST Server ready on port 4000');
    console.log('Open http://localhost:4000/products/');
});