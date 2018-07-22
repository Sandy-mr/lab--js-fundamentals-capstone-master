/**
 * censorBadWords()
 *
 * Write a function called censorBadWords()that returns
 * It should remove bad words in its input sentence and replace them with '****'
 *
 *
**/


// ++ YOUR CODE HERE
function censorBadWords(badWordsList, string) {
    var noBadWords = string.split(" ");
    var sizeBad = noBadWords.length;
    var sizeList= badWordsList.length;

    for (i = 0; i < sizeBad; i++) {
        for ( j = 0; j < sizeList; j++) {
            if (noBadWords[i]== badWordsList[j]) {
                noBadWords[i]= "****";
            }
        }
    }
    noBadWords = noBadWords.join(" ");
    return noBadWords;
}




// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

console.group('ex-03');
  console.log('%cFunction: censorBadWords', 'background-color: green; color: white')
console.groupEnd();

/* ----------------------- TEST-1  ----------------------- */
// Words in 1st string arg that match value from censored list `badWordsList1`
//  should be reformatted to '****'
/* ------------------------------------------------------ */
console.log('TEST-1');

var badWordsList1 = ['heck', 'darn', 'dang', 'crappy', 'crud', 'crap', 'freaking']

var censored_1a = censorBadWords(badWordsList1, "mom get the heck in here and bring me a darn sandwich")
var censored_1b = censorBadWords(badWordsList1, "here son, your crappy sandwich is on the dang plate")

console.assert( censored_1a === "mom get the **** in here and bring me a **** sandwich")
console.assert( censored_1b === "here son, your **** sandwich is on the **** plate")


/* ----------------------- TEST-2  ----------------------- */
// Words in 1st string arg that match value from censored list `badWordsList2`
//  should be reformatted to '****'
/* ------------------------------------------------------ */
console.log('TEST-2');
var badWordsList2 = ['idiot',  'crap', 'freaking']

var censored_2a = censorBadWords(badWordsList2, "your freaking idiot dog left crap on my floor")
var censored_2b = censorBadWords(badWordsList2, "that idiot Chris talks a lot of freaking crap")

console.assert( censored_2a === "your **** **** dog left **** on my floor")
console.assert( censored_2b === "that **** Chris talks a lot of **** ****")



/* ----------------------- END  ----------------------- */
console.log('\n\n');