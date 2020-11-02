const sockjs = require('sockjs');
const handler = require('./echoHandler');

module.exports.install = (opt, server) => {
  const sjs_echo = sockjs.createServer(
    Object.assign({}, opt, {
      prefix: '/disabled_websocket_echo',
      websocket: false,
    })
  );

  sjs_echo.on('connection', handler);
  sjs_echo.installHandlers(server);
};
