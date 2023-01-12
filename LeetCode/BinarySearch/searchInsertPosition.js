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
 *    Solution - 1 
 * */


var searchInsert = function (nums, target) {

    let firstIndex = 0
    let lastIndex = nums.length - 1

    while (firstIndex <= lastIndex) {

        let middleIndex = Math.floor((firstIndex + lastIndex)/2)

        if (target == nums[middleIndex]) {
            return middleIndex
        }

        if (target < nums[middleIndex]) {

            lastIndex = middleIndex - 1

            if(target > nums[lastIndex] && target < nums[middleIndex] ){
                
            }


        }
        if (target > nums[middleIndex]) {

            firstIndex = middleIndex + 1

        }

    }

    return -1

};

console.log(searchInsert([1, 3, 5, 6], 5))
console.log(searchInsert([1, 3, 5, 6], 2))
console.log(searchInsert([1, 3, 5, 6], 7))