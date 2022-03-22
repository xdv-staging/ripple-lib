import * as _ from 'lodash'
import * as assert from 'assert'
import * as utils from './utils'
import {txFlags, removeUndefined} from '../../common'
import parseAmount from './amount'

function isNoDirectDivvy(tx) {
  return (tx.Flags & txFlags.Payment.NoDivvyDirect) !== 0
}

function isQualityLimited(tx) {
  return (tx.Flags & txFlags.Payment.LimitQuality) !== 0
}

function removeGenericCounterparty(amount, address) {
  return amount.counterparty === address ?
    _.omit(amount, 'counterparty') : amount
}

function parsePayment(tx: any): Object {
  assert(tx.TransactionType === 'Payment')

  const source = {
    address: tx.Account,
    maxAmount: removeGenericCounterparty(
      parseAmount(tx.SendMax || tx.Amount), tx.Account),
    tag: tx.SourceTag
  }

  const destination = {
    address: tx.Destination,
    amount: removeGenericCounterparty(parseAmount(tx.Amount), tx.Destination),
    tag: tx.DestinationTag
  }

  return removeUndefined({
    source: removeUndefined(source),
    destination: removeUndefined(destination),
    memos: utils.parseMemos(tx),
    invoiceID: tx.InvoiceID,
    paths: tx.Paths ? JSON.stringify(tx.Paths) : undefined,
    allowPartialPayment: utils.isPartialPayment(tx) || undefined,
    noDirectDivvy: isNoDirectDivvy(tx) || undefined,
    limitQuality: isQualityLimited(tx) || undefined
  })
}

export default parsePayment
