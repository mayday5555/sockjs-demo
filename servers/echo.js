const sockjs = require('sockjs');
const handler = require('./echoHandler');

module.exports.install = (opt, server) => {
  const sjs_echo = sockjs.createServer(
    Object.assign({}, opt, { prefix: '/echo' })
  );
  
  sjs_echo.on('connection', handler);
  sjs_echo.installHandlers(server);
};
