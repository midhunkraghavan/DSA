// Sort array of element using insertion sort.

function mergeSort(arr) {

    for (let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i]
        let j = i - 1

        while (j >= 0 && arr[j] > numberToInsert) {
            arr[j + 1] = arr[j]
            j = j - 1
        }

        arr[j+1] = numberToInsert
    }

    return arr
}

console.log(mergeSort([12, 8, -2, 2, 16, -6, 2,2,8, 0]))