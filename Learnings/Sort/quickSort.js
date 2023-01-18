// Sort array of element using Recursive Quick sort.

// Worst Case Complexity - O(n^2)
// Average Case Complexity -O(nlogn)

function quickSort(arr) {
    
    if(arr.length < 2) return arr
 
     let pivot = arr[arr.length-1]

     let leftArray = []
     let rightArray = [] 
 
     for (let i=0 ; i<arr.length-1; i++) {
         if (pivot < arr[i]) {
             rightArray.push(arr[i])
         }
         if (pivot >= arr[i]) {
             leftArray.push(arr[i])
         }
     }

     return [... quickSort(leftArray),pivot,...quickSort(rightArray)]

 }
 
 console.log(quickSort([10,1,1,8,3,6,5,4,7,2,2,9,0,5]))



