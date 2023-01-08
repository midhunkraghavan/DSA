// Find the index of given elements in array   
// Binary search works only in sorted Arrays


function findIndex(arr, target) {

    if (arr.length == 0) return -1

    let firstIndex = 0
    let lastIndex = arr.length - 1

    while (firstIndex <= lastIndex) {

        let middleIndex = Math.floor((firstIndex + lastIndex) / 2)

        if ( target == arr[middleIndex]) {
            return middleIndex
        }

        if (target < arr[middleIndex]) {
            lastIndex = middleIndex - 1
        }

        if (target > arr[middleIndex]) {
            firstIndex = middleIndex + 1
        }
    }

    return -1

}

console.log(findIndex([2, 6, 12, 18, 23, 37, 78, 81, 89, 93, 95], 100))
