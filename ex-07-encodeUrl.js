/**
*  encodeUrl()
*
*  Write a function to create valid url-encoded URL's from a normal string.
*
*  For example, the string 'you are cool!'
*  would be encoded in a URL as: 'you%20are%20cool%21'
*
*  the string '50% of $100'
*  would be encoded in a URL as: '50%25%20of%20%24100'
*
*  Here is an encoding chart for special characters.
*
*  space - %20
*  ! - %21
*  " - %22
*  $ - %24
*  % - %25
*  ' - %27
*
**/

function encodeURL(url) {
    var encoded = url.split('');
    space = " "
    admiration = "!"
    slash = "\""
    money = "$"
    porcent = "%"
    comma = "'"


    for (let i = 0; i < encoded.length; i++) {
        if (encoded[i] === space) {
            encoded[i] = "%20";
        }else if(encoded[i] === admiration) {
            encoded[i] = "%21";
        }else if(encoded[i] === money) {
            encoded[i] = "%24";
        }else if(encoded[i] === porcent) {
            encoded[i] = "%25";
        }else if(encoded[i] === comma) {
            encoded[i] = "%27";
        }else if(encoded[i] === slash) {
            encoded[i] = "%22";
        }
    }
    encoded = encoded.join('');
    return encoded;
}



//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~


var encodedURL1 = encodeURL('this is great')
console.log("[1] Should return 'this%20is%20great'")
console.assert(encodedURL1 === 'this%20is%20great')
console.log("=================================================================================");
console.log();
//
var encodedURL2 = encodeURL('she said "there is no need for violence!"')
console.log("[2] Should return 'she%20said%20%22there%20is%20no%20need%20for%20violence%21%22'")
console.assert(encodedURL2 === 'she%20said%20%22there%20is%20no%20need%20for%20violence%21%22')
console.log("=================================================================================");
console.log();
//
var encodedURL3 = encodeURL("i'm all about the $")
console.log("[3] Should return 'i%27m%20all%20about%20the%20%24'")
console.assert(encodedURL3 === "i%27m%20all%20about%20the%20%24")
console.log("=================================================================================");
console.log();

var encodedURL4 = encodeURL("20% of $100")
console.log("[4] Should return '20%25%20of%20%24100'")
console.assert(encodedURL4 === "20%25%20of%20%24100")
console.log("=================================================================================");
console.log();
