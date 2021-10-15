const sum = function(arr) {
  if (arr.length === 1) return arr[0]
  return arr[0] + sum(arr.slice(1))
}

const reverseString = function(str) {
  if (str.length === 1) return str[0]
  return reverseString(str.substr(1)) + str[0]
}

const nums = [1,2,3,4,5]
const mySum = sum([1,2,3,4,5])
const myStr = "hello world"
const reversed = reverseString(myStr)
console.log(mySum)
console.log('reversed:', reversed)