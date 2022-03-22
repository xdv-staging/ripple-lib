import * as utils from './utils'
import {validate, iso8601ToDivvyTime, xdvToDrops} from '../common'
import {Instructions, Prepare} from './types'

export type PaymentChannelFund = {
  channel: string,
  amount: string,
  expiration?: string
}

function createPaymentChannelFundTransaction(account: string,
  fund: PaymentChannelFund
): Object {
  const txJSON: any = {
    Account: account,
    TransactionType: 'PaymentChannelFund',
    Channel: fund.channel,
    Amount: xdvToDrops(fund.amount)
  }

  if (fund.expiration !== undefined) {
    txJSON.Expiration = iso8601ToDivvyTime(fund.expiration)
  }

  return txJSON
}

function preparePaymentChannelFund(address: string,
  paymentChannelFund: PaymentChannelFund,
  instructions: Instructions = {}
): Promise<Prepare> {
  validate.preparePaymentChannelFund(
    {address, paymentChannelFund, instructions})
  const txJSON = createPaymentChannelFundTransaction(
    address, paymentChannelFund)
  return utils.prepareTransaction(txJSON, this, instructions)
}

export default preparePaymentChannelFund
