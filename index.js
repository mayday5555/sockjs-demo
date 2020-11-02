'use strict';

const http = require('http');
const { port, server_opt } = require('./config');

const echo = require('./servers/echo');
const disable_websocket = require('./servers/disable_websocket');
const cookie_needed = require('./servers/cookie_needed');

const server = http.createServer();
server.addListener('request', function (req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.writeHead(404);
  res.end('404 - Nothing here (via sockjs-node test_server)');
});
server.addListener('upgrade', function (req, res) {
  res.end();
});

echo.install(server_opt, server);
disable_websocket.install(server_opt, server);
cookie_needed.install(server_opt, server);

console.log(` [*] Listening on 0.0.0.0:${port}`);
server.listen(port, '0.0.0.0');
