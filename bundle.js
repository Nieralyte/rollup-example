'use strict';

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isFunction(arg) {
  return typeof arg === 'function';
}

console.log(isFunction(function foo() {}))
console.log(isFunction({a: 'b'}))

console.log(isObject({a: 'b'}))
console.log(isObject(null))