// Find the index of given elements in array using recurssion
// Binary search works only in sorted Arrays


function recusrssiveBinarySearch(arr, target) {
    return findIndex(arr,target, 0 , arr.length-1)
}

function findIndex(arr, target, leftIndex, rightIndex) {

    if (leftIndex > rightIndex) {
        return -1
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)

    if (target == arr[middleIndex]) {
        return middleIndex
    }

    if (target < arr[middleIndex]) {

       return findIndex(arr, target, leftIndex, middleIndex-1)

    }

    if (target > arr[middleIndex]) {

       return findIndex(arr, target, middleIndex+1, rightIndex)

    }

}

console.log(recusrssiveBinarySearch([2, 6, 12, 18, 23, 37, 78, 81, 89, 93, 95], 2))