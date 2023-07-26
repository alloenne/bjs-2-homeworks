function parseCount(string) {
	let result = Number.parseFloat(string);
	if (Number.isNaN(result)) {
		const error = new Error("Невалидное значение");
		throw error;
	}
	return result;
}

function validateCount(string) {
	try {
		let count = parseCount(string);
		return count;
	} catch (error) {
		return error;
	}
}

class Triangle {
	constructor(a, b, c) {
		if (a + b < c || a + c < b || b + c < a) {
			const error = new Error("Треугольник с такими сторонами не существует");
			throw error;
		}
		this.a = a;
		this.b = b;
		this.c = c;
	}

	get perimeter() {
		return (this.a + this.b + this.c);
	}

	get area() {
		let p = this.perimeter / 2;
		let area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
		return parseCount(area);
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return {
			get area() {
				return "Ошибка! Треугольник не существует";
			},
			get perimeter() {
				return "Ошибка! Треугольник не существует";
			}
		}
	}
}