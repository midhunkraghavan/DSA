// Power of Two

function power(num) {
    if (num < 1) return false
    if (num == 1 || num == 2) return true
    let isPrime = false;

    while ((num / 2) % 2 == 0) {
        num = num / 2
        if (num == 2) {
            isPrime = true
            break;
        }

    }
    return isPrime
}

// Power of two using bitwise operator

function powerOfTwo(num) {
    if (num < 1) return false
    return (num & num - 1) === 0
}

console.log(power(512))
console.log(powerOfTwo(512))
