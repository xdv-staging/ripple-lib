'use strict'; // eslint-disable-line 

const DivvyAPI = require('divvy-api').DivvyAPI;
const DivvyAPIBroadcast = require('divvy-api').DivvyAPIBroadcast;
const ledgerClosed = require('./fixtures/divvyd/ledger-close');
const createMockDivvyd = require('./mock-divvyd');
const {getFreePort} = require('./utils/net-utils');


function setupMockDivvydConnection(testcase, port) {
  return new Promise((resolve, reject) => {
    testcase.mockDivvyd = createMockDivvyd(port);
    testcase._mockedServerPort = port;
    testcase.api = new DivvyAPI({server: 'ws://localhost:' + port});
    testcase.api.connect().then(() => {
      testcase.api.once('ledger', () => resolve());
      testcase.api.connection._ws.emit('message', JSON.stringify(ledgerClosed));
    }).catch(reject);
  });
}

function setupMockDivvydConnectionForBroadcast(testcase, ports) {
  return new Promise((resolve, reject) => {
    const servers = ports.map(port => 'ws://localhost:' + port);
    testcase.mocks = ports.map(port => createMockDivvyd(port));
    testcase.api = new DivvyAPIBroadcast(servers);
    testcase.api.connect().then(() => {
      testcase.api.once('ledger', () => resolve());
      testcase.mocks[0].socket.send(JSON.stringify(ledgerClosed));
    }).catch(reject);
  });
}

function setup() {
  return getFreePort().then(port => {
    return setupMockDivvydConnection(this, port);
  });
}

function setupBroadcast() {
  return Promise.all([getFreePort(), getFreePort()]).then(ports => {
    return setupMockDivvydConnectionForBroadcast(this, ports);
  });
}

function teardown(done) {
  this.api.disconnect().then(() => {
    if (this.mockDivvyd !== undefined) {
      this.mockDivvyd.close();
    } else {
      this.mocks.forEach(mock => mock.close());
    }
    setImmediate(done);
  }).catch(done);
}

module.exports = {
  setup: setup,
  teardown: teardown,
  setupBroadcast: setupBroadcast,
  createMockDivvyd: createMockDivvyd
};
