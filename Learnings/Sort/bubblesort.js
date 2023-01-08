// Sort array of elements using bubble sort

function bubbleSort(arr) {
    let swap = true
    while (swap) {
        swap = false
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                swap = true
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
            }
        }
    }
    return arr
}

console.log(bubbleSort([-10, 8, -2, 2, 16, -6, 2, 0]))