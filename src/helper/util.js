export const isFunction = val =>
  typeof val === 'function'

export const defineProp = (
  obj = {},
  prop,
  value
) => {
  try {
    return Object.defineProperties(obj, prop, {
      value,
      writable: true,
      configurable: true,
      enumerate: true
    })
  } catch (e) {
    obj[prop] = value
    return obj
  }
}
