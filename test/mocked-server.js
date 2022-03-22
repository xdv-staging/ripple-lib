'use strict';


const port = 34371;

const createMockDivvyd = require('./mock-divvyd');

function main() {
  if (global.describe) {
    // we are running inside mocha, exiting
    return;
  }
  console.log('starting server on port ' + port);
  createMockDivvyd(port);
  console.log('starting server on port ' + String(port + 1));
  createMockDivvyd(port + 1);
}

main();
