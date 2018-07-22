/**
 * pluck()
 *
 * Write a function pluck() that, given a list of objects, extracts a list of
 * the values associated with a given property name.
 *
 * e.g:
 * pluck(stooges, 'name') should yield the array, ['moe','larry','curly']
 *
**/

function pluck(obj, property){
	var list = [];
	for (var i = obj.length - 1; i >= 0; i--) {
		list.unshift(obj[i][property])
	}
	return list;
}


//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var stooges = [
   {name: 'moe', age: 40, hairStyle: "bowl cut" },
   {name: 'larry', age: 50, hairStyle: "balding"},
   {name: 'curly', age: 53, hairStyle: "buzzed"},
   {name: 'shemp', age: 62, hairStyle: "parted"},
   {name: 'joe', age: 47, hairStyle: "bald"}
]

var outputArray_1 = pluck(stooges, 'name')
var outputArray_2 = pluck(stooges, 'hairStyle')
var outputArray_3 = pluck(stooges, 'age')

console.log("[1] Should return 'moe' in the 1st index");
console.assert( outputArray_1[0] === 'moe' )
console.log("===========================================");
console.log();

console.log("[2] Should return 'larry' in the 2nd index");
console.assert( outputArray_1[1] === 'larry' )
console.log("===========================================");
console.log();

console.log("[3] Should return 'shemp' in the 4th index");
console.assert( outputArray_1[3] === 'shemp' )
console.log("===========================================");
console.log();

console.log("[4] Should return 'bal`' in the 2nd index");
console.assert( outputArray_2[1] === 'balding' )
console.log("===========================================");
console.log();

console.log("[5] Should return 'buzzed' in the 3rd index");
console.assert( outputArray_2[2] === 'buzzed' )
console.log("===========================================");
console.log();

console.log("[6] Should return 'parted' in the 4th index");
console.assert( outputArray_2[3] === 'parted' )
console.log("===========================================");
console.log();

console.log("[7] Should return 53 in the 3rd index");
console.assert( outputArray_3[2] === 53 )
console.log("===========================================");
console.log();

console.log("[8] Should return 62 in the 4th index");
console.assert( outputArray_3[3] === 62 )
console.log("===========================================");
console.log();

console.log("[9] Should return 47 in the 5th index");
console.assert( outputArray_3[4] === 47 )
console.log("===========================================");
console.log();
