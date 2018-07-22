/**
 * Ex-03: getCapitalLetters()
 *
 * Write a function called getCapitalLetters()that returns
 * an array of all of the capital letters of a string
 *
**/
function getCapitalLetters(word){
	var string = [];
	for (var i = 0; i < word.length; i++) {
		var a = word[i];
	    if (a === a.toUpperCase() && a !== " ") {
	    	string.push(a);
	}
}
	return string;
}







//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var output_1 = getCapitalLetters('I called Xiu Chang and he sent the original Super Mario Bros through FedEx')
var output_2 = getCapitalLetters('TLDR My mother gave Nancy nothing for Xmas')

console.log("[1] Should return a length of 8");
console.assert( output_1.length === 8 )
console.log("=====================================");
console.log();

console.log("[2] Should return an 'S' in 3rd index");
console.assert( output_1[3] === 'S' )
console.log("=====================================");
console.log();

console.log("[3] Should return 'M' in the 4th index");
console.assert( output_1[4] === 'M' )
console.log("=====================================");
console.log();

console.log("[3] Should return a length of 7");
console.assert( output_2.length === 7 )
console.log("=====================================");
console.log();

console.log("[4] Should return 'R' in the 3rd index");
console.assert( output_2[3] === 'R' )
console.log("=====================================");
console.log();

console.log("[5] Should return 'X' in the 6th index");
console.assert( output_2[6] === 'X' )
console.log("=====================================");

//Explorer Mode: Make these tests pass
//---------------------
// var output_3 = getCapitalLetters('TLDR; My mother gave Nancy nothing for Xmas.')
// console.assert( output_2.length === 7 )
// console.assert( output_2[3] === 'R' )
// console.assert( output_2[6] === 'X' )
