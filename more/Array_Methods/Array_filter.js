/* Definition
 creates a new array with all elements that pass the test implemented by the provided function.
 */

/* Syntax
 array.filter(callback, <opt>thisArg);
 callback (element, <opt>index, <opt>array);
*/

const fruits = ['apple', 'banana', 'orange']

const result = fruits.filter((fruit) => fruit.length > 5)

console.log(result)

//Output: [ 'banana', 'orange' ]
//why is this?
//because the first fruit is not longer than 5 characters

// Search with a substring in an array of strings

const searchInArray = (array, searchTerm) => {
  return array.filter((item) => {
    if (item.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item
    }
  })
}

const fruits2 = ['apple', 'banana', 'orange', 'pineapple', 'pear', 'peach']
console.log(searchInArray(fruits2, 'an'))

//Polyfill for Array.prototype.filter()

if (!Array.prototype.filter) {
  Array.prototype.filter = function (func, thisArg) {
    'use strict'
    if (!((typeof func === 'Function' || typeof func === 'function') && this))
      throw new TypeError()

    var len = this.length >>> 0,
      res = new Array(len), // preallocate array
      t = this,
      c = 0,
      i = -1

    var kValue
    if (thisArg === undefined) {
      while (++i !== len) {
        // checks to see if the key was set
        if (i in this) {
          kValue = t[i] // in case t is changed in callback
          if (func(t[i], i, t)) {
            res[c++] = kValue
          }
        }
      }
    } else {
      while (++i !== len) {
        // checks to see if the key was set
        if (i in this) {
          kValue = t[i]
          if (func.call(thisArg, t[i], i, t)) {
            res[c++] = kValue
          }
        }
      }
    }

    res.length = c // shrink down array to proper size
    return res
  }
}
