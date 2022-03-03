# Divvy-lib

Divvy-lib is a JavaScript API for interacting with the XDV Ledger

[![NPM](https://nodei.co/npm/divvy-lib.png)](https://www.npmjs.org/package/divvy-lib)

### Features

+ Connect to a `divvyd` server from Node.js or a web browser
+ Helpers for creating requests and parsing responses for the [divvyd API](https://developers.xdv.io/divvyd-api.html)
+ Listen to events on the XDV Ledger (transactions, ledger, validations, etc.)
+ Sign and submit transactions to the XDV Ledger
+ Type definitions for TypeScript

## Getting Started

See also: [DivvyAPI Beginners Guide](https://xdv.io/build/divvyapi-beginners-guide/)

### Requirements

+ **[Node v10](https://nodejs.org/)** is recommended. Other versions may work but are not frequently tested.
+ **[Yarn](https://yarnpkg.com/)** is recommended. `npm` may work but we use `yarn.lock`.

### Install

In an existing project (with `package.json`), install `divvy-lib`:
```
$ yarn add divvy-lib
```

Then see the [documentation](https://github.com/xdv/divvy-lib/blob/develop/docs/index.md) and [code samples](https://github.com/xdv/divvy-lib/tree/develop/docs/samples).

**What is divvy-lib used for?** Here's a [list of applications](APPLICATIONS.md) that use `divvy-lib`. Open a PR to add your app or project to the list!

### Mailing Lists

We have a low-traffic mailing list for announcements of new divvy-lib releases. (About 1 email per week)

+ [Subscribe to divvy-lib-announce](https://groups.google.com/forum/#!forum/divvy-lib-announce)

If you're using the XDV Ledger in production, you should run a [divvyd server](https://github.com/xdv/divvyd) and subscribe to the divvy-server mailing list as well.

+ [Subscribe to divvy-server](https://groups.google.com/forum/#!forum/divvy-server)

## Development

To build the library for Node.js:
```
$ yarn compile
```

The TypeScript compiler will [output](./tsconfig.json#L7) the resulting JS files in `./dist/npm/`.

To build the library for the browser:
```
$ yarn build
```

Gulp will [output](./Gulpfile.js) the resulting JS files in `./build/`.

For details, see the `scripts` in `package.json`.

## Running Tests

1. Clone the repository
2. `cd` into the repository and install dependencies with `yarn install`
3. `yarn test`

Also, run `yarn lint` to lint the code with `tslint`.

## Generating Documentation

The continuous integration tests require that the documentation stays up-to-date. If you make changes to the JSON schemas, fixtures, or documentation sources, you must update the documentation by running `yarn run docgen`.

## More Information

+ [Divvy Developer Center](https://xdv.io/build/)
