
import {inspect} from 'util'
import * as browserHacks from './browser-hacks'

class DivvyError extends Error {

  name: string
  message: string
  data?: any

  constructor(message = '', data?: any) {
    super(message)

    this.name = browserHacks.getConstructorName(this)
    this.message = message
    this.data = data
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor)
    }
  }

  toString() {
    let result = '[' + this.name + '(' + this.message
    if (this.data) {
      result += ', ' + inspect(this.data)
    }
    result += ')]'
    return result
  }

  /* console.log in node uses util.inspect on object, and util.inspect allows
  us to customize its output:
  https://nodejs.org/api/util.html#util_custom_inspect_function_on_objects */
  inspect() {
    return this.toString()
  }
}

class DivvydError extends DivvyError {}

class UnexpectedError extends DivvyError {}

class LedgerVersionError extends DivvyError {}

class ConnectionError extends DivvyError {}

class NotConnectedError extends ConnectionError {}

class DisconnectedError extends ConnectionError {}

class DivvydNotInitializedError extends ConnectionError {}

class TimeoutError extends ConnectionError {}

class ResponseFormatError extends ConnectionError {}

class ValidationError extends DivvyError {}

class NotFoundError extends DivvyError {
  constructor(message = 'Not found') {
    super(message)
  }
}

class MissingLedgerHistoryError extends DivvyError {
  constructor(message?: string) {
    super(message || 'Server is missing ledger history in the specified range')
  }
}

class PendingLedgerVersionError extends DivvyError {
  constructor(message?: string) {
    super(message || 'maxLedgerVersion is greater than server\'s most recent ' +
      ' validated ledger')
  }
}

export {
  DivvyError,
  UnexpectedError,
  ConnectionError,
  DivvydError,
  NotConnectedError,
  DisconnectedError,
  DivvydNotInitializedError,
  TimeoutError,
  ResponseFormatError,
  ValidationError,
  NotFoundError,
  PendingLedgerVersionError,
  MissingLedgerHistoryError,
  LedgerVersionError
}
