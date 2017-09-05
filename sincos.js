const precision = 8
const PI2 = 6.283185307179586

const power = (base, exponent) => {
	let val = base
	let i = 0

	while (i < exponent - 1) {
		val *= base
		i += 1
	}

	return val
}

const factorial = n => {
	let val = n

	while (n > 2) {
		val *= n - 1
		n -= 1
	}

	return val
}

const series = (x, offset, precision) => {
	// Constrain x to PI * 2 so that we don't need
	// to add more precision as x increases
	x %= PI2

	let n = 0
	let val = x

	// Start at 1 for COS
	if (offset === 2) {
		val = 1
	}

	while (n < precision) {
		const pos = offset + (n * 2)
		const pow = power(x, pos)
		const fact = factorial(pos)
		const sum = pow / fact

		// Impulse Force or Restorative Force
		if (n % 2) {
			val += sum
		} else {
			val -= sum
		}

		n += 1
	}

	return val
}

const sin = x => {
	const sineOffset = 3
	return series(x, sineOffset, precision)

	// Example:
	//     return x -
	//         (power(x, 3) / factorial(3)) +
	//         (power(x, 5) / factorial(5)) -
	//         (power(x, 7) / factorial(7)) +
	//         (power(x, 9) / factorial(9)) -
	//         (power(x, 11) / factorial(11)) +
	//         (power(x, 13) / factorial(13)) -
	//         (power(x, 15) / factorial(15)) +
	//         (power(x, 17) / factorial(17)) -
	//         (power(x, 19) / factorial(19))
}

const cos = x => {
	const cosineOffset = 2
	return series(x, cosineOffset, precision)
}

const canvas = document.getElementsByTagName('canvas')[0]
canvas.width = 200
canvas.height = 200
const ctx = canvas.getContext('2d')
ctx.lineWidth = 3

const x = canvas.width / 2
const y = canvas.height / 2

const mag = 50
const rate = 0.3
let t = 0

ctx.fillStyle = 'RGBA(0, 0, 0, 0.1)'
ctx.strokeStyle = 'RGBA(255, 255, 0, 1)'

const draw = () => {
	ctx.fillRect(0, 0, canvas.width, canvas.height)
	const px1 = x + (sin(t) * mag)
	const py1 = y + (cos(t) * mag)

	t += rate

	const px2 = x + (sin(t) * mag)
	const py2 = y + (cos(t) * mag)

	ctx.beginPath()
	ctx.moveTo(px1, py1)
	ctx.lineTo(px2, py2)
	ctx.stroke()
	ctx.closePath()
}

setInterval(draw, 40)
