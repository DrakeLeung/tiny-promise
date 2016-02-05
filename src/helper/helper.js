import * as promiseState from '../constant/promiseState'

const handleFullfill = (chain, self) => {
  // 上一个then()的success handler的返回值
  const result = chain.onFullfilled(self.msg)
  // 传给下一个then()
  chain.resolve(result)
}

const handleReject = (chain, self) => {
  const result = chain.onRejected(self.msg)
  chain.reject(result)
}

export const notify = self => {
  self.chains.forEach(chain => {
    switch (self.state) {
      case promiseState.FULLFILLED:
        handleFullfill(chain, self)
        break

      case promiseState.REJECTED:
        handleReject(chain, self)
        break
    }
  })
}
