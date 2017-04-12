/**
 * Created by Pierre-LouisTALBOT on 09/01/2017.
 */

/**
 * External Module dependencies.
 */
const app = require('express')();
const server = require('http').createServer(app);

/**
 * Express Route configuration
 */
app.get('/', function (req, res, next) {
    res.sendFile(__dirname + '/index.html');
});

/**
 * Start listen with the server
 */
const port = process.env.PORT || 8080;
server.listen(port, () => console.log('Express server listening on %d, in %s mode', port, app.get('env')));
