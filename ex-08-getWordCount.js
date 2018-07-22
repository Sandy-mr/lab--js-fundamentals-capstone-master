/**
 * getWordCount()
 *
 * Write a function called getWordCount() that takes a string of text as input and returns
 * an object which stores the frequency of each word in the string.
 *
 * Note that your counts should NOT be case-sensitive.
 *
**/

function getWordCount(largeString) {
	var newString = "";
	var counter = {};
	for (var i=0; i<largeString.length; i++) {
		if (largeString[i] == "'" || largeString[i] == "." || largeString[i] == ";" || largeString[i] == "-" || largeString[i] == "," || largeString[i] == "!" || largeString[i] == "?" || largeString[i] == "_" || largeString[i] == "[" || largeString[i] == "]") {
			newString += "";
		} else {
			newString += largeString[i];
		}
	}
	newString = newString.toLowerCase();
	newString = newString.split(" ");
	for (var i=0; i<newString.length; i++) {
		var count = 0;

		for (var j = newString.length -1; j>=0; j--) {
			if (newString[i] == newString[j]) {
				count++;
			}
		}
		counter[newString[i]] = count;
	}
	return counter;
}




//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var sampleText = `I'm tired of trying to find happiness through lies and self-medicating. If you need me, I'll be at the bar. The only thing I found in the fridge was a dead dove in a bag. But anyhoo, can you believe that the only reason the club is going under is because it's in a terrifying neighborhood? Oh, I'm sorry, I forgot… your wife is dead! They once called me the worst audience participant Cirque du Soleil ever had.
I need a fake passport, preferably to France. I like the way they think. Oh, COME ON! YOU'RE the Chiclet! Not me. Caw ca caw, caw ca caw, caw ca caw! It's ok. You be with Yam. So did you see the new Poof? His name's Gary and we don't need anymore lawsuits. If this were a Lifetime Moment of Truth movie, this would be our act break. But it wasn't. Michael, look, this has got to stop. I mean, flattered? Yes. Interested? Not tonight.
I'm foolish and I'm funny and I'm needy. Am I needy? Are you sure I'm not needy? 'Cause I feel needy sometimes. Obviously this blue part here is the land.
Let's see some bananas and nuts! This was a big get for God. They don't allow you to have bees in here. I want to cry so bad, but I don't think I can spare the moisture. No, Pop-pop does not get a treat, I just brought you a [bleep]ing pizza. It walked on my pillow! I'll buy you a hundred George Michaels that you can teach to drive! A group of British builders operating outside the O.C.`

var wordFrequencyObject = getWordCount(sampleText)

console.log("[1] Should return 3 for 'be'");
console.assert( wordFrequencyObject.be === 3 )
console.log("====================================");
console.log();

console.log("[2] Should return 3 for 'need'");
console.assert( wordFrequencyObject.need === 3 )
console.log("====================================");
console.log();

console.log("[3] Should return 9 for 'you'");
console.assert( wordFrequencyObject.you === 9 )
console.log("====================================");
console.log();


// EXPLORER MODE - PART 2 - Strip the Punctuation
//-----------------------------
console.log("[4] Should return 4 for 'needy'");
console.assert( wordFrequencyObject.needy === 4)
console.log("====================================");
console.log();

console.log("[5] Should return 6 for 'caw'");
console.assert( wordFrequencyObject.caw === 6)
console.log("====================================");
console.log();

console.log("[6] Should return 2 for 'dead'");
console.assert( wordFrequencyObject.dead === 2)
console.log("====================================");
console.log();
