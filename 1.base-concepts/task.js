"use strict"

function solveEquation(a, b, c) {
	let arr = [];

	let d = Math.pow(b, 2) - 4 * a * c;

	if (d == 0) {
		let x = -b / (2 * a);
		arr.push(x);
	} else if (d >= 0) {
		let x1 = (-b + Math.sqrt(d)) / (2 * a);
		let x2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(x1);
		arr.push(x2);
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let percentMonth = percent / 100 / 12;
	let principalAmount = amount - contribution;
	let monrhlyFee = principalAmount * (percentMonth + (percentMonth / (((1 + percentMonth) ** countMonths) - 1)));
	let totalLoanAmount = monrhlyFee * countMonths;
	return parseFloat(totalLoanAmount.toFixed(2));

}