import * as promiseState from './constant/promiseState'
import {notify} from './helper/helper'

const reject = function (reason) {
  let self = this

  if (self.state !== promiseState.REJECTED) {
    self.state = promiseState.REJECTED
    self.msg = reason
  }

  notify(self)
}

export default reject
