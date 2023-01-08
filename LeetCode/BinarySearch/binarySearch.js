/**
 *                                 Binary Search
 * 
 *  Given an array of integers nums which is sorted in ascending order, 
 *  and an integer target, write a function to search target in nums. 
 *  If target exists, then return its index. Otherwise, return -1.
 * 
 *  You must write an algorithm with O(log n) runtime complexity.
 * 
 * Example 1:

           Input: nums = [-1,0,3,5,9,12], target = 9
           Output: 4
           Explanation: 9 exists in nums and its index is 4

   Example 2:

           Input: nums = [-1,0,3,5,9,12], target = 2
           Output: -1
           Explanation: 2 does not exist in nums so return -1
      
   Constraints:

    1 <= nums.length <= 104
    -104 < nums[i], target < 104
    All the integers in nums are unique.
    nums is sorted in ascending order.
        

 */

/**
 *   Solution 1 - Using Buit in function
 */


var binarySearchSolution1 = function (nums, target) {
    return nums.indexOf(target)
};

// console.log(binarySearchSolution1([-1,0,3,5,9,12], 9))
// console.log(binarySearchSolution1([-1,0,3,5,9,12], 2))


/**
 *   Solution 2
 */



var binarySearchSolution2 = function (nums, target) {

    let firstIndex = 0;
    let lastIndex = nums.length - 1

    while (firstIndex <= lastIndex) {

        let middleIndex = Math.floor((firstIndex + lastIndex) / 2)

        if (target == nums[middleIndex]) {
            return middleIndex
        }

        if (target < nums[middleIndex]) {
            lastIndex = middleIndex - 1
        }

        if (target > nums[middleIndex]) {
            firstIndex = middleIndex + 1
        }
    }

    return -1

};

// console.log(binarySearchSolution2([-1, 0, 3, 5, 9, 12], 9))
// console.log(binarySearchSolution2([-1, 0, 3, 5, 9, 12], 2))


/**
 *   Solution 3 - Recurssive Binary Search
 */



var binarySearchSolution3 = function (nums, target) {
    return recurssiveSearch(nums, target, 0, nums.length - 1)
};

function recurssiveSearch(nums, target, firstIndex, lastIndex) {

    if (firstIndex > lastIndex) {
        return -1
    }

    let middleIndex = Math.floor((firstIndex + lastIndex) / 2)

    if (target == nums[middleIndex]) {
        return middleIndex
    }

    if (target < nums[middleIndex]) {
        return recurssiveSearch(nums, target, firstIndex, middleIndex-1 )

    }

    if (target > nums[middleIndex]) {
        return recurssiveSearch(nums, target, middleIndex+1, lastIndex )
    }

}

console.log(binarySearchSolution3([-1, 0, 3, 5, 9, 12], 9))
console.log(binarySearchSolution3([-1, 0, 3, 5, 9, 12], 2))