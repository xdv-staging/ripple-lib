##0.12.0

**Breaking Changes**

+ REMOVED Remote storage interface
+ REMOVED Remote `ping` configuration
+ REMOVED Old/deprecated Remote server configuration (websocket_ip, websocket_port)
+ REMOVED browser `online` reconnect listener
    - [Cleanup, deprecations - 2833a7b6](https://github.com/xdv/divvy-lib/commit/2833a7b66e696dab427464625077f9b93092d0d5)

+ Remove `jsbn` and use `bignumber.js` instead for big number math
+ The `allow_nan` flag has been removed. Results for invalid amounts will always be `NaN`
    - [Refactor to use bignumber.js - d025b4a0](https://github.com/xdv/divvy-lib/commit/d025b4a0c3a98a6de27a1bee9573c85347bcd66b)
    - [Handle invalid input in parse_human - c8f18c8c](https://github.com/xdv/divvy-lib/commit/c8f18c8c8590b7b48e370e0325b6677b7720294f)
    - [Check for null in isNumber - b86790c8](https://github.com/xdv/divvy-lib/commit/b86790c8543c239a532fd7697d4652829019d385)
    - [Cleanup amount.js - d0fb291c](https://github.com/xdv/divvy-lib/commit/d0fb291c4e330193a244902156f1d74730da357d)
 
 
**Changes**

+ [Add deprecation warnings to request constructors. The first argument to request constructor functions should be an object containing request properties](https://github.com/xdv/divvy-lib/commit/35d76b3520934285f80059c1badd6c522539104c)

+ [Fix taker_gets_funded exceeding offer.TakerGets](https://github.com/xdv/divvy-lib/commit/b19ecb4482b589d575382b7a5d0480b963383bb1)

+ [Fix unsymmetric memo serializing](https://github.com/xdv/divvy-lib/commit/1ed36fabdbd54f4d31078c2b0eaa3becc0fe2821)

+ [Fix IOU value passed to `Amount.from_json()`](https://github.com/xdv/divvy-lib/commit/fd1b64393dffb3d1819cd40b8d43df43a4db042d)

+ [Update transaction binary parsing to account for XRP delivered amounts](https://github.com/xdv/divvy-lib/commit/35a346a674e6ee1e1e495db93700d55984efc7dd)

+ [Bumped dependencies](https://github.com/xdv/divvy-lib/commit/f9bc7cc746b44b24b61bbe260ae2e9d9617286da)

 

##0.11.0

+ [Track the funded status of an order based on cumulative account orders](https://github.com/xdv/divvy-lib/commit/67d39737a4d5e0fcd9d9b47b9083ee00e5a9e652) and [67d3973](https://github.com/xdv/divvy-lib/commit/b6b99dde022e1e14c4797e454b1d7fca50e49482)

+ Remove blobvault client from divvy-lib, use the [`divvy-vault-client`](https://github.com/xdv/divvy-vault-client) instead [9b3d62b7](https://github.com/xdv/divvy-lib/commit/9b3d62b765c4c25beae6eb0fa57ef3a07f2581b1) 

+ [Add support for `ledger` option in requestBookOffers](https://github.com/xdv/divvy-lib/commit/34c0677c453c409ef0a5b351959abdc176d3bacb)

+ [Add support for `limit` option in requestBookOffers](https://github.com/xdv/divvy-lib/commit/d1d4452217c878d0b377d24830b4cd8b3162f6e0)

+ [Add `ledgerSelect` request constructor in `Remote`](https://github.com/xdv/divvy-lib/commit/98f40abfc3aa74dec5067a2d90002756cc8acd01)

+ [Default to binary data for commands that accept the binary flag](https://github.com/xdv/divvy-lib/commit/7cb113fcbcfc1e3e9830a999148b3e78df3387cc)

+ [Fix metadata account check](https://github.com/xdv/divvy-lib/commit/3f61598d6c87e3cc877af60e2d515f9eff73dfe1)

+ [Double check `tes` code before emitting `success`](https://github.com/xdv/divvy-lib/commit/97a8c874903eb7309d8f755955ac80872f670582)

+ [Decrease redundancy in binary account_tx parsing](https://github.com/xdv/divvy-lib/commit/0aba638e6e7f4f6e22cb6424eed3897ebad90a5a)

+ [Abort server connection on unrecoverable TLS error](https://github.com/xdv/divvy-lib/commit/000a2ea00c57157044aeca0fb3f24b37669b163c)

+ [Fix complete ledgers check on subscription that is not initial](https://github.com/xdv/divvy-lib/commit/89de91301e682a46dc60aaacc7ae152e8fe1b7c7)


##0.10.0

+ [Transaction changes](https://github.com/xdv/divvy-lib/pull/221)

+ **Important** `tef*` and `tel*` and errors will no longer be presented as
final. Rather than considering these errors final, divvy-lib will wait until
the `LastLedgerSequence` specified in the transaction is exceeded.  This makes
failures more definitive, and ensures that no transaction will resubmit
indefinitely.

+ A new, final tej-class error is introduced to account for transactions that
are locally determined to have expired: `tejMaxLedger`.

+ [Allow per transaction fees to be set, `transaction.setFixedFee()`](https://github.com/xdv/divvy-lib/commit/9b22f279bcbe60ee6bcf4b7fa60a48e9c197a828)

+ [Improve memo support](https://github.com/xdv/divvy-lib/commit/1704ac4ae144c0ce54afad86f644c75a632080b1)
    - Add `MemoFormat` property for memo
    - Enforce `MemoFormat` and `MemoType` to be valid ASCII
    - Support `text` and `json` MemoFormat 

+ [Update jscl library](https://github.com/xdv/divvy-lib/commit/3204998fcb6f31d6c90532a737a4adb8a1e420f6)
    - Improved entropy by taking advantage of platform crypto
    - Use jscl's k256 curve instead of altering the c256 curve with k256 configuration
    - **deprecated:** the c256 curve is linked to the k256 curve to provide backwards compatibility, this link will be removed in the future
     
+ [Fix empty queue check on reconnect](https://github.com/xdv/divvy-lib/commit/3c21994adcf72d1fbd87d453ceb917f9ad6df4ec)

##0.9.4

+ [Normalize offers from book_offers and transaction stream](https://github.com/xdv/divvy-lib/commit/86ed24b94cf7c8929c87db3a63e9bbea7f767e9c)

+ [Fix: Amount.to_human() precision rounding](https://github.com/xdv/divvy-lib/commit/e371cc2c3ceccb3c1cfdf18b98d80093147dd8b2)

+ [Fix: fractional drops in funded taker_pays setter](https://github.com/xdv/divvy-lib/commit/0d7fc0a573a144caac15dd13798b23eeb1f95fb4)

##0.9.3

+ [Change `presubmit` to emit immediately before transaction submit](https://github.com/xdv/divvy-lib/commit/7a1feaa89701bf861ab31ebd8ffdc8d8d1474e29)

+ [Add a "core" browser build of divvy-lib which has a subset of features and smaller file size](https://github.com/xdv/divvy-lib/pull/205)

+ [Update binformat with missing fields from divvyd](https://github.com/xdv/divvy-lib/commit/cae980788efb00191bfd0988ed836d60cdf7a9a2)

+ [Wait for transaction validation before returning `tec` error](https://github.com/xdv/divvy-lib/commit/6bdd4b2670906588852fc4dda457607b4aac08e4)

+ [Change default `max_fee` on `Remote` to `1 XRP`](https://github.com/xdv/divvy-lib/commit/d6b1728c23ff85c3cc791bed6982a750641fd95f)

+ [Fix: Request ledger_accept should return the Remote](https://github.com/xdv/divvy-lib/pull/209)

##0.9.2

+ [**Breaking change**: Change accountRequest method signature](https://github.com/xdv/divvy-lib/commit/6f5d1104aa3eb440c518ec4f39e264fdce15fa15)

+ [Add paging behavior for account requests, `account_lines` and `account_offers`](https://github.com/xdv/divvy-lib/commit/722f4e175dbbf378e51b49142d0285f87acb22d7) 

+ [Add max_fee setter to transactions to set max fee the submitter is willing to pay] (https://github.com/xdv/divvy-lib/commit/24587fab9c8ad3840d7aa345a7037b48839e09d7)

+ [Fix: cap IOU Amounts to their max and min value] (https://github.com/xdv/divvy-lib/commit/f05941fbc46fdb7c6fe7ad72927af02d527ffeed)

Example on how to use paging with `account_offers`:
```
// A valid `ledger_index` or `ledger_hash` is required to provide a reliable result.
// Results can change between ledger closes, so the provided ledger will be used as base.
var options = {
    account: < divvyAccount >,
    limit: < Number between 10 and 400 >,
    ledger: < valid ledger_index or ledger_hash >
}

// The `marker` comes back in an account request if there are more results than are returned 
// in the current response. The amount of results per response are determined by the `limit`.
if (marker) {
    options.marker = < marker >;
}

var request = remote.requestAccountOffers(options);
```

[Full working example](https://github.com/geertweening/divvy-lib-scripts/blob/master/account_offers_paging.js)


##0.9.1

+ Switch account requests to use ledgerSelect rather than ledgerChoose ([278df90](https://github.com/xdv/divvy-lib/commit/278df9025a20228de22379a53c76ca12d40fa591))

+ **Deprecated** setting `ident` and `account_index` on account requests ([278df90](https://github.com/xdv/divvy-lib/commit/278df9025a20228de22379a53c76ca12d40fa591))

+ Change initial account transaction sequence to 1 ([a3c1d06](https://github.com/xdv/divvy-lib/commit/a3c1d06eba883dc84fe2bfe700e4309795c84cac))

+ Fix: instance transaction withoute remote ([d3b6b81](https://github.com/xdv/divvy-lib/commit/d3b6b8127c7b01e416b400c25abf1719bdd008ca))

+ Fix: account root request ledger argument ([bc1f9f8](https://github.com/xdv/divvy-lib/commit/bc1f9f8a286b187d36ebaf552694e31e73742293))

+ Fix: rsign.js local signing and example ([d3b6b81](https://github.com/xdv/divvy-lib/commit/d3b6b8127c7b01e416b400c25abf1719bdd008ca) and [f1004c6](https://github.com/xdv/divvy-lib/commit/f1004c6db2a0ce59bbabbb8f2b355a9fd9995fd8))


##0.9.0

+ Add routes to the vault client for KYC attestations ([ed2da574](https://github.com/xdv/divvy-lib/commit/ed2da57475acf5e9d2cf3373858f4274832bd83f))

+ Currency: add `show_interest` flag to show or hide interest in `Currency.to_human()` and `Currency.to_json()` [Example use in tests](https://github.com/xdv/divvy-lib/blob/947ec3edc2e7c8f1ef097e496bf552c74366e749/test/currency-test.js#L123)

+ Configurable maxAttempts for transaction submission ([d107092](https://github.com/xdv/divvy-lib/commit/d10709254061e9e4416d2cb78b5cac1ec0d7ffa5))

+ Binformat: added missing TransactionResult options ([6abed8d](https://github.com/xdv/divvy-lib/commit/6abed8dd5311765b2eb70505dadbdf5121439ca8))

+ **Breaking change:** make maxLoops in seed.get_key optional. [Example use in tests](https://github.com/xdv/divvy-lib/blob/23e473b6886c457781949c825b3ff48b3984e51f/test/seed-test.js) ([23e473b](https://github.com/xdv/divvy-lib/commit/23e473b6886c457781949c825b3ff48b3984e51f))

+ Shrinkwrap packages for dependency locking ([2dcd5f9](2dcd5f94fbc71200eb08a5044c76ef94f7971913))

+ Fix: Amount.to_human() precision bugs ([4be209e](https://github.com/xdv/divvy-lib/commit/4be209e286b5b209bec7bcd1212098985e15ff2f) and [7708c64](https://github.com/xdv/divvy-lib/commit/7708c64576e70ce3ac190442daceb30e4446aab7))

+ Fix: change handling of requestLedger options ([57b7030](https://github.com/xdv/divvy-lib/commit/57b70300f5f0c7534ede118ddbb5d8762668a4f8))


##0.8.2

+ Currency: Allow mixed letters and numbers in currencies

+ Deprecate account_tx map/reduce/filterg

+ Fix: correct requestLedger arguments

+ Fix: missing subscription on error events for some server methods

+ Fix: orderbook reset on reconnect

+ Fix: divvy-lib crashing. Add potential missing error handlers


##0.8.1

+ Wallet: Add Wallet class that generates wallets

+ Make npm test runnable in Windows.

+ Fix several stability issues, see merged PR's for details

+ Fix bug in Amount.to_human_full()

+ Fix undefined fee states when connecting to a divvyd that is syncing


##0.8.0

+ Orderbook: Added tracking of offer funds for determining when offers are not funded

+ Orderbook: Added tests

+ Orderbook: Update owner funds

+ Transactions: If transaction errs with `tefALREADY`, wait until all possible submissions err with the same before emitting `error`. Fixes a client "Transaction malformed" bug.

+ Transactions: Track submissions, don't bother submitting to unconnected servers

+ Request: `request.request()` now accepts an array of servers as first argument. Servers can be represented with URL, or the server object itself.

+ Request: `request.broadcast()` now returns the number of servers request was sent to

+ Server: Acquire host information from server without additional request

+ Amount: Add a constant for the maximum canonical value that can be expressed as a Divvy value

+ Amount: Make Constants static fields on the class, instead of a seperate export


##0.7.39

+ Improvements to multi-server support. Fixed an issue where a server's score was not reset and connections would keep dropping after being connected for a significant amount of time.

+ Improvements in order book support. Added support for currency pairs with interest bearing currencies. You can request an order book with hex, ISO code or full name for the currency.

+ Fix value parsing for amount/currency order pairs, e.g. `Amount.from_human("XAU 12345.6789")`

+ Improved Amount parsing from human readable string given a hex currency, e.g. `Amount.from_human("10 015841551A748AD2C1F76FF6ECB0CCCD00000000")`

+ Improvements to username normalization in the vault client

+ Add 2-factor authentication support for vault client

+ Removed vestiges of Grunt, switched to Gulp


##0.7.37

+ **Deprecations**

    1. Removed humanistic amount detection in `transaction.payment`. Passing `1XRP` as the payment amount no longer works.
    2. `remote.setServer` uses full server URL rather than hostname. Example: `remote.setServer('wss://s`.xdv.io:443')`
    3. Removed constructors for deprecated transaction types from `transaction.js`.
    4. Removed `invoiceID` option from `transaction.payment`. Instead, use the `transaction.invoiceID` method.
    5. Removed `transaction.transactionManager` getter.

+ Improved multi-server support. Servers are now ranked dynamically, and transactions are broadcasted to all connected servers.

+ Automatically ping connected servers. Client configuration now should contain `ping: <seconds>` to specify the ping interval.

+ Added `transaction.lastLedger` to specify `LastLedgerSequence`. Setting it this way also ensures that the sequence is not bumped on subsequent requests.

+ Added optional `remote.accountTx` binary parsing.
    ```js
      {
        binary: true,
        parseBinary: false
      }
    ```
+ Added full currency name support, e.g. `Currency.from_json('XRP').to_human({full_name:'Divvys'})` will return `XRP - Divvys`

+ Improved interest bearing currency support, e.g. `Currency.from_human('USD - US Dollar (2.5%pa)')`

+ Improve test coverage

+ Added blob vault client.  The vault client facilitates interaction with divvy's namespace and blob vault or 3rd party blob vaults using divvy's blob vault software (https://github.com/xdv/divvy-blobvault). A list of the available functions can be found at [docs/VAULTCLIENT.md](docs/VAULTCLIENT.md)


##0.7.35

+ `LastLedgerSequence` is set by default on outgoing transactions. This refers to the last valid ledger index (AKA sequence) for a transaction. By default, this index is set to the current index (at submission time) plus 8. In theory, this allows divvy-lib to deterministically fail a transaction whose submission request timed out, but whose associated server continues to emit ledger_closed events.

+ Transactions that err with `telINSUF_FEE_P` will be automatically resubmitted. This error indicates that the `Fee` supplied in the transaction submission request was inadquate. Ideally, the `Fee` is tracked by divvy-lib in real-time, and the resubmitted transaction will most likely succeed.

+ Added Transaction.iff(function(callback) { }). Callback expects first argument to be an Error or null, second argument is a boolean which indicates whether or not to proceed with the transaction submission. If an `iff` function is specified, it will be executed prior to every submission of the transaction (including resubmissions).

+ Transactions will now emit `presubmit` and `postsubmit` events. They will be emitted before and after a transaction is submitted, respectively.

+ Added Transaction.summary(). Returns a summary of a transaction in semi-human-readable form. JSON-stringifiable.

+ Remote.requestAccountTx() with `binary: true` will automatically parse transactions.

+ Added Remote.requestAccountTx filter, map, and reduce.

```js
  remote.requestAccountTx({
    account: 'retc',
    ledger_index_min: -1,
    ledger_index_max: -1,
    limit: 100,
    binary: true,

    filter: function(transaction) {
      return transaction.tx.TransactionType === 'Payment';
    },

    map: function(transaction) {
      return Number(transaction.tx.Amount);
    },

    reduce: function(a, b) {
      return a + b;
    },

    pluck: 'transactions'
  }, console.log)
```

+ Added persistence hooks.

+ General performance improvements, especially for long-running processes.

