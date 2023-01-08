// Fibanocci Series -  Big - O -Notation  = O(n) 

function fibanocci(num) {
    let first = 0
    let second = 1
    let fibArray = []

    for (let i = 0; i < num; i++) {
        if (i == 0) {
            fibArray.push(first)
        } else if (i == 1) {
            fibArray.push(second)
        } else {

            fibArray.push(fibArray[i - 2] + fibArray[i - 1])
        }
    }

    return fibArray.toString()

}

let result = fibanocci(6)
console.log(result);



// Fibanocci Series using recurrsion

function fibanocciUsingRecursion(num) {
    if (num < 2) return num
    return fibanocciUsingRecursion(num - 2) + fibanocciUsingRecursion(num - 1)
}

let results = fibanocci(6)
console.log(results);