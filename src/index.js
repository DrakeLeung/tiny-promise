// import TinyPromise from './npo'
import TinyPromise from './tiny-promise'

const p = new TinyPromise((resolve, reject) => {
  Math.random() > 0.5
    ? resolve('bigger than 0.5')
    : reject(new Error('It is broken'))
})

p
  .then(
    msg => msg.toUpperCase(msg),
    reason => console.log(reason)
  )
  .then(upperMsg =>
    console.log(upperMsg)
  )
