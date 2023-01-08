/**
 *                                 CONTAINS DUPLICATE
 * 
 * Given an integer array nums, return true if any value appears at least twice in the array,
   and return false if every element is distinct.
  
Example 1:

Input: nums = [1,2,3,1]
Output: true

Example 2:

Input: nums = [1,2,3,4]
Output: false

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

Constraints:

    1 <= nums.length <= 105
    -109 <= nums[i] <= 109

 */


/**
 * Solution 1 -  Using Set  
 */


var containsDuplicateSolution1 = function (nums) {

    let uniqNums = [...new Set(nums)]

    if (uniqNums.toString() == nums.toString()) {
        return false
    } else {
        return true
    }

};

// console.log(containsDuplicateSolution1([1,2,3,4]))
// console.log(containsDuplicateSolution1([1,2,3,1]))
// console.log(containsDuplicateSolution1([1,1,1,3,3,4,3,2,4,2]))


/** 
 *  Solution 2 
 */

var containsDuplicateSolution2 = function (nums) {

    let checkDuplicate = {}

    for (let el of nums) {
        if (checkDuplicate[el]) {
            return true
        } else {
            checkDuplicate[el] = true
        }
    }

    return false
};

console.log(containsDuplicateSolution2([1, 2, 3, 4]))
console.log(containsDuplicateSolution2([1, 2, 3, 1]))
console.log(containsDuplicateSolution2([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))