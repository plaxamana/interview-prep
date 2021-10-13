const selectionSort = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let lowestNumberIndex = i
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[lowestNumberIndex]) {
                lowestNumberIndex = j
            }
        }

        if (lowestNumberIndex !== i) {
            swap(nums, i, lowestNumberIndex)
        }
    }
}

function swap(nums, i, j) {
    let temp = nums[i]
    nums[i] = nums[j] 
    nums[j] = temp
}

let arr = [4,2,7,1,3] 
console.log('before sort:', arr)
selectionSort(arr)
console.log('after sort:', arr)