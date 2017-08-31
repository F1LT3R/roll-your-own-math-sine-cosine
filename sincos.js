const sincosPrecision = 10
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

const factoral = n => {
	let val = n

	while (n > 1) {
		val *= n - 1
		n -= 1
	}

	return val
}

const series = (x, start, depth) => {
	// Constrain x to PI * 2 so that we don't need
	// to add more precision as x increases
	x %= (PI2)

	let n = 0
	let val = x

	// Start at 1 for COS
	if (start === 2) {
		val = 1
	}

	while (n < depth) {
		const pos = start + (n * 2)
		const sum = power(x, pos) / factoral(pos)

		if (n % 2) {
			val += sum
		} else {
			val -= sum
		}

		n += 1
	}

	return val
}

const cos = y => {
	return series(y, 2, sincosPrecision)
}

const sin = x => {
	return series(x, 3, sincosPrecision)

	// Example:
	//     return x -
	//         (power(x, 3) / factoral(3)) +
	//         (power(x, 5) / factoral(5)) -
	//         (power(x, 7) / factoral(7)) +
	//         (power(x, 9) / factoral(9)) -
	//         (power(x, 11) / factoral(11)) +
	//         (power(x, 13) / factoral(13)) -
	//         (power(x, 15) / factoral(15)) +
	//         (power(x, 17) / factoral(17)) -
	//         (power(x, 19) / factoral(19))
}

const canvas = document.getElementsByTagName('canvas')[0]
canvas.width = 200
canvas.height = 200
const ctx = canvas.getContext('2d')

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
