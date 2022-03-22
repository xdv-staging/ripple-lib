/* eslint-disable max-nested-callbacks */
'use strict'; // eslint-disable-line 

const {DivvyAPI, DivvyAPIBroadcast} = require('divvy-api');
const ledgerClosed = require('./fixtures/divvyd/ledger-close');

const port = 34371;
const baseUrl = 'ws://testdivvy.circleci.com:';

function setup(port_ = port) {
  const tapi = new DivvyAPI({server: baseUrl + port_});
  return tapi.connect().then(() => {
    return tapi.connection.request({
      command: 'test_command',
      data: {openOnOtherPort: true}
    });
  }).then(got => {
    return new Promise((resolve, reject) => {
      this.api = new DivvyAPI({server: baseUrl + got.port});
      this.api.connect().then(() => {
        this.api.once('ledger', () => resolve());
        this.api.connection._ws.emit('message', JSON.stringify(ledgerClosed));
      }).catch(reject);
    });
  }).then(() => {
    return tapi.disconnect();
  });
}

function setupBroadcast() {
  const servers = [port, port + 1].map(port_ => baseUrl + port_);
  this.api = new DivvyAPIBroadcast(servers);
  return new Promise((resolve, reject) => {
    this.api.connect().then(() => {
      this.api.once('ledger', () => resolve());
      this.api._apis[0].connection._ws.emit('message',
        JSON.stringify(ledgerClosed));
    }).catch(reject);
  });
}

function teardown() {
  if (this.api.isConnected()) {
    return this.api.disconnect();
  }
  return undefined;
}

module.exports = {
  setup: setup,
  teardown: teardown,
  setupBroadcast: setupBroadcast
};
