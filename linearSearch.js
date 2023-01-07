// Find the index of given elements in array   Big - O = O(n)

function findIndex(arr, target) {  

    for (i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i
        }
    }
    return -1
}

console.log(findIndex([0,1,2,3,4,5,6,7],7))