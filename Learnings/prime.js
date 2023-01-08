function prime(num) {
    if (num < 2) return false
    let p = []
    for (let i = 2; i <= num; i++) {
        let isPrime = true
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                isPrime = false
            } 
        }
        if (isPrime) {
            p.push(i)
        }
    }
    return p
}

console.log(prime(100))
