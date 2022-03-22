'use strict';
const DivvyAPI = require('../../src').DivvyAPI; // require('divvy-lib')

const api = new DivvyAPI({server: 'wss://s1.divvy.com:443'});
const address = 'r3kmLJN5D28dHuH8vZNUZpMC43pEHpaocV';

api.connect().then(() => {
  api.getBalances(address).then(balances => {
    console.log(JSON.stringify(balances, null, 2));
    process.exit();
  });
});
