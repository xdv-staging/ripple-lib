# divvy-lib

A JavaScript API for interacting with the XDV Ledger

[![Circle CI](https://circleci.com/gh/divvy/divvy-lib/tree/develop.svg?style=svg)](https://circleci.com/gh/divvy/divvy-lib/tree/develop) [![Coverage Status](https://coveralls.io/repos/divvy/divvy-lib/badge.png?branch=develop)](https://coveralls.io/r/divvy/divvy-lib?branch=develop)

[![NPM](https://nodei.co/npm/divvy-lib.png)](https://www.npmjs.org/package/divvy-lib)

### Features

+ Connect to a `divvyd` server from Node.js or a web browser
+ Issue [divvyd API](https://divvy.com/build/divvyd-apis/) requests
+ Listen to events on the XDV Ledger (transaction, ledger, etc.)
+ Sign and submit transactions to the XDV Ledger

## Getting Started

See also: [DivvyAPI Beginners Guide](https://divvy.com/build/divvyapi-beginners-guide/)

You can use `npm`, but we recommend using `yarn` for the added assurance provided by `yarn.lock`.

+ [Yarn Installation Instructions](https://yarnpkg.com/en/docs/install)

Install `divvy-lib`:
```
$ yarn add divvy-lib
```

Then see the [documentation](https://github.com/xdv/divvy-lib/blob/develop/docs/index.md) and [code samples](https://github.com/xdv/divvy-lib/tree/develop/docs/samples)

## Running tests

1. Clone the repository
2. `cd` into the repository and install dependencies with `yarn install`
3. `yarn test` or `yarn test --coverage` (`istanbul` will create coverage reports in `coverage/lcov-report/`)

## Generating Documentation

The continuous integration tests require that the documentation stays up-to-date. If you make changes to the JSON schemas, fixtures, or documentation sources, you must update the documentation by running `yarn run docgen`.

`npm` may be used instead of `yarn` in the commands above.

## More Information

+ [Divvy Developer Center](https://divvy.com/build/)
