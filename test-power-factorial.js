const Table = require('cli-table')

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

const table = new Table({
	head: ['t', 'x', 'n', 'power', 'factorial', 'sum', 'val']
})

const precision = 3
const offset = 3  // Sine Offset

const x = 2
let val = x
let t = 0

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

	table.push([t, x, n, pow, fact, sum, val])

	t += 1
}

console.log(table.toString())
