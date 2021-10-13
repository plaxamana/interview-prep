const intersectionOfTwoArrays = function(arr1, arr2) {
    let largerArray = arr1.length > arr2.length ? arr1 : arr2
    let smallerArray = arr1.length < arr2.length ? arr1 : arr2

    let hashtable = {}
    let thirdArray = []

    for (const value of smallerArray) {
        hashtable[value] = true
    }

    for (let i = 0; i < largerArray.length; i++) {
        let currentValue = largerArray[i]
        if (currentValue in hashtable) {
            thirdArray.push(currentValue)
        }
    }

    return thirdArray;
}

const nums1 = [1,2,3,4,5,6]
const nums2 = [0,2,4,6,8]
console.log('nums1:',nums1)
console.log('nums2:',nums2)
console.log('intersection:',intersectionOfTwoArrays(nums1, nums2))