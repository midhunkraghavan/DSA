// Find the index of given elements in array   
// Binary search works only in sorted Arrays


function findIndex(arr, target) {

    if (arr.length == 0) return -1

    let firstIndex = 0
    let lastIndex = arr.length - 1

    while (firstIndex) {

        let middleIndex = Math.floor(arr.length / 2)

        

        if (arr[middleIndex] == target) {
            return middleIndex
        }

        if (arr[middleIndex] < target) {
            lastIndex = middleIndex
        }

        if (arr[middleIndex > target]) {
            firstIndex = middleIndex + 1
        }
    }





}

console.log(findIndex([1, 2, 3, 4], 1))