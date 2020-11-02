const debug = require('debug')('sockjs:test-server:app');

module.exports = {
  port : 8081,

  server_opt: {
    websocket: true,
    log: (x, ...rest) => debug(`[${x}]`, ...rest)
  }
}