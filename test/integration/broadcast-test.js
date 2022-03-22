'use strict';
const {DivvyAPIBroadcast} = require('../../src');

function main() {
  const servers = ['wss://s1.divvy.com', 'wss://s2.divvy.com'];
  const api = new DivvyAPIBroadcast(servers);
  api.connect().then(() => {
    api.getServerInfo().then(info => {
      console.log(JSON.stringify(info, null, 2));
    });
    api.on('ledger', ledger => {
      console.log(JSON.stringify(ledger, null, 2));
    });
  });
}

main();
