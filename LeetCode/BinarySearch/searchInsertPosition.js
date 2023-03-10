/**
 *                  SEARCH INSERT POSITION
 * 
 *  Given a sorted array of distinct integers and a target value, 
 *  return the index if the target is found. If not, return the index
 *  where it would be if it were inserted in order.
 *  You must write an algorithm with O(log n) runtime complexity.
 * 
 * 
 *  Example 1:

      Input: nums = [1,3,5,6], target = 5
      Output: 2

 *  Example 2:

       Input: nums = [1,3,5,6], target = 2
       Output: 1

 *  Example 3:

        Input: nums = [1,3,5,6], target = 7
        Output: 4

 *  Constraints:

    1 <= nums.length <= 104
    -104 <= nums[i] <= 104
    nums contains distinct values sorted in ascending order.
    -104 <= target <= 104


 */


/**
 *    Solution - 1  Big - O - O(n)
 * */


var searchInsert1 = function (nums, target) {

    if (target < nums[0]) {
        return 0
    }

    if (target > nums[nums.length - 1]) {
        return nums.length
    }

    for (let i = 0; i < nums.length; i++) {

        if (target == nums[i]) {
            return i
        }

        if (target > nums[i] && target < nums[i + 1]) {

            return i + 1

        }

    }

};

// console.log(searchInsert1([1, 3, 5, 6], 0))
// console.log(searchInsert1([0, 2, 3, 4, 5, 10], 11))
// console.log(searchInsert1([1, 3, 5, 6], 7))


/**
 *    Solution - 2
 * */

var searchInsert2 = function (nums, target) {

    if (target < nums[0]) {
        return 0
    }

    if (target > nums[nums.length - 1]) {
        return nums.length
    }

    let firstIndex = 0
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

        if(target > nums[middleIndex-1] && target < nums[middleIndex]){
            return middleIndex
        }

    }

};

console.log(searchInsert2([1, 3, 5, 6], 0))
console.log(searchInsert2([0, 2, 3, 4, 5, 10], 11))
console.log(searchInsert2([1, 3, 5, 6], 7))