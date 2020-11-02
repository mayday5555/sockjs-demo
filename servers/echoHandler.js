const debug = require('debug')('sockjs:test-server:app');

module.exports = (conn) => {
  debug(`    [+] echo open    ${conn}`);
  conn.on('close', function () {
    debug(`    [-] echo close   ${conn}`);
  });
  conn.on('data', function (m) {
    const d = JSON.stringify(m);
    debug(
      `    [ ] echo message ${conn} ${d.slice(0, 64)}${
        d.length > 64 ? '...' : ''
      }`
    );
    conn.write(m);
  });
}