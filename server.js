const express = require('express');
const cors = require('cors');
const session = require('express-session');
const server = express();
const knexSessionStore = require('connect-session-knex')(session);
const dbConnection = require('./data/dbConfig.js');
const apiRouter = require('./api/apiRouter.js');

const sessionConfig = {
    name: 'auth-cookie',
    secret: process.env.SESSION_SECRET || 'this is my secret string',
    cookie: {
        maxAge: 1000 * 60 * 10,
        secure: false,
        httpOnly: true,
    },
    resave: false,
    saveUninitialized: true,
    store: new knexSessionStore({
        knex: dbConnection,
        tablename: 'sessions',
        sidfieldname: 'sid',
        createtable: true,
        clearInterval: 60000,
    }),
    loggedIn: false,
    userId: ''
};

server.use(express.json());
server.use(cors());
server.use(session(sessionConfig));

server.get('/', (req, res) => {
    return res.send('Server is alive and well.');
})

server.use('/api', apiRouter);

module.exports = server;