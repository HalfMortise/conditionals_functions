/*
 * Conditionals, Functions, Scope, and Loops
 */
//Conditionals
let storeA = 4.40;
let storeB = 4.40;

function compareStorePrices (storeA, storeB) {
	let storeAIsLower = storeA < storeB;
	if(storeAIsLower) {
		console.log("Store A Has A Lower Price")
	} else if(storeB < storeA) {
		console.log("Store B Has A Lower Price")
	} else {
		console.log("They Are Equal In Price")
	}
}

compareStorePrices (10,5);
compareStorePrices (6, 25);

//Functions: limit them no more than 20 lines of code, and should only perform one function
/*
function squareNum (number) {
	return number * number;
}

let squaredNumber = squareNum(4);
console.log(squaredNumber);
*/
/*
 * Scope
 */
/*
let x = 10;

function addNumbers (n, m, x) {
	console.log(x);
	let b;
	if (1===1) {
		b = 8;
	}
	console.log(b);
	return n + m;
}
addNumbers(1, 2, 10);
*/
/*
 * Arrays
 */

//					 0, 1, 2, 3, 4
//let ourArray = [1, 2, 3, 4, ['a', 'b', 'c']];
//console.log(ourArray[4][0]);
/*
let ourArray = [1, 2, 3, 4, 5, 6, 7];
//for(counter; comp; incr)
//ourArray.length includes the total value of the array
let arrLen = ourArray.length;
for(let i = 0; i<arrLen; i++){
	console.log("i is equal to: " + i);
	console.log(ourArray[i])
//Nesting loops
	for(let j = 0; j<10; j++) {
		console.log('j is equal to: ' + j);
	}
}

//While loop: continues to run until a conditional is false
let x = 0;
while (x < 10) {
	console.log('Ran');
}
*/
/*
let x = 0;
while (x < 10) {
	console.log('Ran');
	x = x + 1;
}
*/