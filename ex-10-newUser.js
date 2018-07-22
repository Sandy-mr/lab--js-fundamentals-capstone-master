/**
 * new User()
 *
 * (1) Create a User constructor function that creates new users.
 *      It should accept 2 string arguments: a name and a user-role.
 *      and create an object instance that has 3 properties:
 *      - name (string)
 *      - role (string -- value should be 'visitor', 'member', 'editor', 'admin')
 *      - createdAt should be a number with the value of Date.now()
 *
 *
 * (2) Create a method called `.hasPermissions()`
 *     on the prototype that accepts an array of roles.
 *
 *     The method should check to see if a given user
 *     has permissions -- should return true.
 *
**/

function User(name, type){
	var obj = {	};
	obj.name = name;
	obj.role = type;
	obj.createdAt = Date.now();
	obj.hasPermissions = function (permission) {
			if (obj.role == "editor" || obj.role === "admin") {
				return true;
			} else {
				return false;
			}
		}
	return obj;
	
}



 //*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var simpleUser = new User('jill88', 'visitor')
var adminUser = new User('jack76', 'admin')
var contentCreatorList = ['editor', 'admin']

console.log("[1] Should return 'jill88'");
console.assert(simpleUser.name === 'jill88')
console.log("=======================================");
console.log();

console.log("[2] Should return 'visitor'");
console.assert(simpleUser.role === 'visitor')
console.log("=======================================");
console.log();

console.log("[3] Should return typeof 'number'");
console.assert(typeof simpleUser.createdAt === 'number' )
console.log("=======================================");
console.log();

console.log("[4] Should return true");
console.assert(simpleUser.createdAt < Date.now() )
console.log("=======================================");
console.log();

console.log("[5] Should return false for permissions");
console.assert(simpleUser.hasPermissions(contentCreatorList) === false )
console.log("=======================================");
console.log();

console.log("[6] Should return 'jack76'");
console.assert(adminUser.name === 'jack76')
console.log("=======================================");
console.log();

console.log("[7] Should return 'admin'");
console.assert(adminUser.role === 'admin')
console.log("=======================================");
console.log();

console.log("[8] Should return typeof 'number'");
console.assert(typeof adminUser.createdAt === 'number' )
console.log("=======================================");
console.log();

console.log("[9] Should return true");
console.assert(adminUser.createdAt < Date.now() )
console.log("=======================================");
console.log();

console.log("[10] Should return true for permissions");
console.assert(adminUser.hasPermissions(contentCreatorList) === true )
console.log("=======================================");
console.log();

