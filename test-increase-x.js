const factorial = n => {
	let val = n
	while (n > 2) {
		val *= n - 1
		n -= 1
	}
	return val
}

const power = (base, exponent) => {
	let val = base
	let i = 0
	while (i < exponent - 1) {
		val *= base
		i += 1
	}
	return val
}

const precision = 20
const offset = 3  // Sine Offset
let x = 2

while (x < 5) {
	let val = x
	let t = 0

	console.log(`x = ${x}`)

	while (t < precision) {
		const n = offset + (t * 2)
		const pow = power(x, n)
		const fact = factorial(n)
		const sum = pow / fact

		if (t % 2) {
			val += sum
		} else {
			val -= sum
		}

		console.log(val)

		t += 1
	}

	x += 1
}
