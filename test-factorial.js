const factorial = n => {
    let val = n
    // Eg: val = 5

    // The factorial for 1 is "1", so we
    // gain nothing from solving for "1"
    while (n > 2) {
        val *= n - 1
        /* Eg:
            n-1 = 4
            val = val * 4
            val = 5 * 4
            val = 20
        */

        // Count backwards from 5 to 2.
        n -= 1
    }

    return val
}

const f1 = factorial(1)
const f2 = factorial(2)
const f3 = factorial(3)
const f4 = factorial(4)
const f5 = factorial(5)

console.log(1, f1)
console.log(2, f2)
console.log(3, f3)
console.log(4, f4)
console.log(5, f5)
