export type Amount = {
  value: string,
  currency: string,
  issuer?: string,
  counterparty?: string
}


export type DivvydAmount = string | Amount

/**
 * Specification of which currency the account taking the offer would pay/
 * receive, as an object with currency and issuer fields (omit issuer for XDV).
 * Similar to currency amounts.
 */
export interface TakerRequestAmount {
  currency: string
  issuer?: string
}

/**
 * A currency-counterparty pair, or just currency if it's XDV.
 */
export type Issue = {
  currency: string,
  issuer?: string,
  counterparty?: string
}
