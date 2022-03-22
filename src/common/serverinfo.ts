import * as _ from 'lodash'
import {convertKeysFromSnakeCaseToCamelCase} from './utils'
import Connection from './connection'
import BigNumber from 'bignumber.js'

export type GetServerInfoResponse = {
  buildVersion: string,
  completeLedgers: string,
  hostID: string,
  ioLatencyMs: number,
  load?: {
    jobTypes: Array<Object>,
    threads: number
  },
  lastClose: {
    convergeTimeS: number,
    proposers: number
  },
  loadFactor: number,
  peers: number,
  pubkeyNode: string,
  pubkeyValidator?: string,
  serverState: string,
  validatedLedger: {
    age: number,
    baseFeeXDV: string,
    hash: string,
    reserveBaseXDV: string,
    reserveIncrementXDV: string,
    ledgerVersion: number
  },
  validationQuorum: number
}

function renameKeys(object, mapping) {
  _.forEach(mapping, (to, from) => {
    object[to] = object[from]
    delete object[from]
  })
}

function getServerInfo(connection: Connection): Promise<GetServerInfoResponse> {
  return connection.request({command: 'server_info'}).then(response => {
    const info = convertKeysFromSnakeCaseToCamelCase(response.info)
    renameKeys(info, {hostid: 'hostID'})
    if (info.validatedLedger) {
      renameKeys(info.validatedLedger, {
        baseFeeXdv: 'baseFeeXDV',
        reserveBaseXdv: 'reserveBaseXDV',
        reserveIncXdv: 'reserveIncrementXDV',
        seq: 'ledgerVersion'
      })
      info.validatedLedger.baseFeeXDV =
        info.validatedLedger.baseFeeXDV.toString()
      info.validatedLedger.reserveBaseXDV =
        info.validatedLedger.reserveBaseXDV.toString()
      info.validatedLedger.reserveIncrementXDV =
        info.validatedLedger.reserveIncrementXDV.toString()
    }
    return info
  })
}

function computeFeeFromServerInfo(cushion: number,
  serverInfo: GetServerInfoResponse
): string {
  return (new BigNumber(serverInfo.validatedLedger.baseFeeXDV)).
    times(serverInfo.loadFactor).
    times(cushion).toString()
}

function getFee(connection: Connection, cushion: number): Promise<string> {
  return getServerInfo(connection).then(serverInfo => {
    return computeFeeFromServerInfo(cushion, serverInfo)
  })
}

export {
  getServerInfo,
  getFee
}
