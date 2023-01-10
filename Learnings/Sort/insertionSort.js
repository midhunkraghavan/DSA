// Sort array of element using insertion sort.

function insertionSort(arr) {

    console.log(arr);

    for (let i = 1; i < arr.length; i++) {

        let j = i

        while (j != 0) {

            j = j--
      
            console.log(j);

            if (arr[j] > arr[i]) {
                let tmp = arr[j]
                arr[j] = arr[i]
                arr[i] = tmp
            }
        }
        
    }

    return arr
}
console.log(insertionSort([-10, 8, -2, 2, 16, -6, 2, 0]))