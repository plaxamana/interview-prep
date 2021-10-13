const bubbleSort = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] > nums[j+1]) {
                swap(nums, j, j+1)
            }
        }
    }
}

const swap = function(nums, i, j) {
    let temp = nums[i]
    nums[i] = nums[j] 
    nums[j] = temp
}

let unsorted = [3,-1, 5, 100, 20, 33, 69, 70, 11]
console.log('unsorted:', unsorted)
bubbleSort(unsorted)
console.log('sorted:', unsorted)