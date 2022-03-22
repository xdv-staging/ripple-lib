import * as common from '../../common'
import {Amount, DivvydAmount} from '../../common/types/objects'


function parseAmount(amount: DivvydAmount): Amount {
  if (typeof amount === 'string') {
    return {
      currency: 'XDV',
      value: common.dropsToXdv(amount)
    }
  }
  return {
    currency: amount.currency,
    value: amount.value,
    counterparty: amount.issuer
  }
}

export default parseAmount
