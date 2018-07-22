/**
 *  merge()
 *
 *  Write a function called `merge()` that takes two objects and
 *  returns a new object with their combined properties & values.
 *
 *  If the two objects have the same property, make sure that you
 *  return the property-values from the object in the 2nd argument.
 *
**/


function merge(obj1, obj2) {
    for (var key in obj2) {
        if (obj2.hasOwnProperty(key)){
        	obj1[key] = obj2[key];
        } 	
    }
    return obj1;
}






//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var obj1 = {name: "Shaman Tilroy", age: 33, id: 6288}
var obj2 = {id: 6288, balance: 38832, accountActive: true }

var merged = merge(obj1, obj2)

console.log("[1] Should return 'Shaman Tilroy'");
console.assert(merged.name === "Shaman Tilroy")
console.log("============================================");
console.log();

console.log("[2] Should return 33");
console.assert(merged.age === 33)
console.log("============================================");
console.log();

console.log("[3] Should return 6288");
console.assert(merged.id === 6288)
console.log("============================================");
console.log();

console.log("[4] Should return 38832");
console.assert(merged.balance === 38832)
console.log("============================================");
console.log();

console.log("[5] Should return true");
console.assert(merged.accountActive === true)
console.log("============================================");
console.log();

// -------------------------------
var obj3 = {title: "How to Wear a Bowtie", artist: "Showtime", released: 1984 }
var obj4 = {artist: "The Riverboat", released: 1980, album: "Wishy Washy", quantity: 10 }

var merged2 = merge(obj3, obj4)

console.assert( merged2.artist === "The Riverboat" )
console.assert( merged2.released === 1980 )
console.assert( merged2.title === "How to Wear a Bowtie")
console.assert( merged2.quantity === 10 )
