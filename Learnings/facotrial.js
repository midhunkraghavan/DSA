// factorial of a number

function factorial(num) {
    let fact = 1
    while (num != 0) {
        fact = fact * num
        num--
    }
    return fact
}

//console.log(factorial(5))

// Factorial of number using recurrsion  Big - O - O(n)

function factorialUsingRecurrsion(num) {
    if (num == 0) return 1
    return num * factorialUsingRecurrsion(num-1)

}
console.log(factorialUsingRecurrsion(5))

