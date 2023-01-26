// Given a staire case of n steps, count the number of distinct ways to climb to the top.
// You can Either climp 1 step of 2 steps at a time

function climbingStaircase(n) {

    let noOfWays = [1, 2]

    for (let i = 2; i <= n; i++) {

        noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2]
    }

    return noOfWays[n - 1]
}

console.log(climbingStaircase(1));   // Ans => 1     // (1)
console.log(climbingStaircase(2));   // Ans => 2     // (1,1) , (2)
console.log(climbingStaircase(3));   // Ans => 3     // (1,1,1) , (1,2), (2,1)
console.log(climbingStaircase(4));   // Ans => 5     // (1,1,1,1), (1,1,2), (1,2,1), (2,1,1), (2,2)