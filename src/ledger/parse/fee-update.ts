
import BigNumber from 'bignumber.js'
import {dropsToXdv} from '../../common'

function parseFeeUpdate(tx: any) {
  const baseFeeDrops = (new BigNumber(tx.BaseFee, 16)).toString()
  return {
    baseFeeXDV: dropsToXdv(baseFeeDrops),
    referenceFeeUnits: tx.ReferenceFeeUnits,
    reserveBaseXDV: dropsToXdv(tx.ReserveBase),
    reserveIncrementXDV: dropsToXdv(tx.ReserveIncrement)
  }
}

export default parseFeeUpdate
