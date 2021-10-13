const linearSearch = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (target === nums[i]) {
            return i
        } else if (nums[i] > target) {
            console.log(`${nums[i]} is greater than ${target}, breaking...`)
            break
        }
    }
    return -1
}

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubleArr = myArray.map((n) => n * 2)
const value = 17;

console.log(doubleArr)
console.log(linearSearch(doubleArr, value))