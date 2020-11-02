const sockjs = require('sockjs');
const handler = require('./echoHandler');

module.exports.install = (opt, server) => {
  const sjs_echo = sockjs.createServer(
    Object.assign({}, opt, { prefix: '/cookie_needed_echo', jsessionid: true })
  );

  sjs_echo.on('connection', handler);
  sjs_echo.installHandlers(server);
};
