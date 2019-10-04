export function isPromise (val: any) {
  return (
    val &&
    val.then &&
    val.then instanceof Function &&
    val.constructor &&
    val.constructor.reject &&
    val.constructor.reject instanceof Function &&
    val.constructor.resolve &&
    val.constructor.resolve instanceof Function
  )
}

const serializableTypes = [
  Boolean,
  Number,
  String,
  Date,
  RegExp,
  ArrayBuffer
]

export function isSerializable (value: any) {
  return ArrayBuffer.isView(value) || serializableTypes.some(type => value instanceof type)
}
