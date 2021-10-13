const insertionSort = function(arr) {
    for (let i = 1; i < arr.length; i++) {
        let temp_value = arr[i]
        let position = i - 1

        while (position >= 0) {
            if (arr[position] > temp_value) {
                arr[position+1] = arr[position]
                position--
            } else {
                break
            }
        }

        arr[position+1] = temp_value
    }
}

let arr = [4, 2, 7, 1, 3];
console.log("before sort:", arr);
insertionSort(arr);
console.log("after sort:", arr);