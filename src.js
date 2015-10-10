// ES6 util version:
import {isFunction, isObject} from 'util-jsnext'

console.log(isFunction(function foo() {}))
console.log(isFunction({a: 'b'}))

console.log(isObject({a: 'b'}))
console.log(isObject(null))
