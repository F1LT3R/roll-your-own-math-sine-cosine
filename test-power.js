const power = (base, exponent) => {
    let val = base
    let i = 0

    // LOG OUTPUT
    console.log(i, val)

    while (i < exponent - 1) {
        val *= base
        i += 1

        // LOG OUTPUT
        console.log(i, val)
    }
}

power(2, 8)