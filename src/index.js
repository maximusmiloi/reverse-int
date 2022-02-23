module.exports = function reverse (n) {
	let result = [];
	let b = (Math.abs(n) + '').split('');
	let newArr = b.forEach(el => result.unshift(el));
	return +result.join('');
}
