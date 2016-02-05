import * as promiseState from './constant/promiseState'
import {notify} from './helper/helper'

const resolve = function (value) {
  let self = this

  if (self.state !== promiseState.FULLFILLED) {
    self.state = promiseState.FULLFILLED
    self.msg = value
  }

  notify(self)
}

export default resolve
