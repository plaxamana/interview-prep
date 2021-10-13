const binarySearch = function(arr, target) {
    let lo = 0
    let hi = arr.length - 1

    while (lo < hi) {
        let mid = Math.floor((lo + hi)/2)
        if (target === arr[mid]) {
            return mid
        } else if (target < arr[mid]) {
            hi = mid - 1
        } else {
            lo = mid + 1
        }
    }

    return -1
}


const myArray = [1,2,3,4,5,6,7,8,9,10] 
const value = 20

const result1 = binarySearch(myArray, value)
console.log(result1)