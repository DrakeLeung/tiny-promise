// import TinyPromise from './npo'
import TinyPromise from './tiny-promise'

const p = new TinyPromise((resolve, reject) => {
  // Math.random() > 0.5
  //   ? resolve('bigger than 0.5')
  //   : reject(new Error('It is broken'))
  reject('It is broken')
  // resolve('Success')
})

// p
//   .then(
//     msg => msg.toUpperCase(),
//     reason => reason.toUpperCase()
//   )
//   .catch(upperMsg =>
//     console.log(upperMsg)
//   )

//
// resolve
//
TinyPromise.resolve('success')
  .then(value => console.log(value))

TinyPromise.reject('Ooops')
  .catch(msg => console.error(msg))
