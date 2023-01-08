/**
 *                                    VALID ANAGRAM       
 * 
 *  Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * 
 *  An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 *  typically using all the original letters exactly once.
 * 
 *  Example 1:

          Input: s = "anagram", t = "nagaram"
          Output: true

    Example 2:

          Input: s = "rat", t = "car"
          Output: false

    Constraints:

    1 <= s.length, t.length <= 5 * 104
    s and t consist of lowercase English letters.
 
    
 * */



/**
 *  Solution 1 - Using Built in functions
 */

var isAnagramSolution1 = function (s, t) {
    if (s.split('').sort().toString() == t.split('').sort().toString())
        return true
    else
        return false
};

// console.log(isAnagramSolution1("anagram",  "nagaram"))
// console.log(isAnagramSolution1("rat",  "car"))



/**
 *  Solution 2
 */

var isAnagramSolution2 = function (s, t) {
    let checkAnagram = {}

    for (let element of s) {
        if (checkAnagram[element]) {
            checkAnagram[element] = checkAnagram[element] + 1
        } else {
            checkAnagram[element] = 1
        }
    }


    for (let element of t) {
        if (checkAnagram[element]) {
            checkAnagram[element] = checkAnagram[element] - 1
            if(checkAnagram[element] == 0){
                delete checkAnagram[element]
            }

        }else{
            checkAnagram[element] = -1
        }
    }

    if(Object.keys(checkAnagram).length == 0){
        return true
    }else{
        return false
    }

};

// console.log(isAnagramSolution2("anagram", "nagaram"))
// console.log(isAnagramSolution2("rat", "car"))
// console.log(isAnagramSolution2("a", "ab"))