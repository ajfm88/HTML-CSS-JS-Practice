var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function revArr(num) {

	for (var i = 0; i <= Math.floor((num.length -1)/2); i++){
		let el = num[i]
		num[i] = num[num.length - 1 - i];
		num[num.length - 1 - i] = el;
		}
	
	return num;
}

console.log(revArr(array1))

console.log((() => [1,2,3,4,5].reverse())())