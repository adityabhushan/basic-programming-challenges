var fs = require('fs')
var content = fs.readFileSync(process.argv[2] || 'testFile.txt').toString().split(" ")


function wordCount() {
	var wordList = [];
	var count = 1;
	for(i = 0; i < content.length; i++){
		if( (content[i] === 'a' ) || (content[i] === 'the') || (content[i] === 'an') || (content[i] === 'of') || (content[i] === 'to') || (content[i] === 'from') || (content[i] === 'in') || (content[i] === 'was') || (content[i] === 'and') || (content[i] === 'for') || (content[i] === 'is') || (content[i] === 'it') || (content[i] === 'as') || (content[i] === 'are') || (content[i] === 'on')){
			content.splice(i,1);
			i--;
		}
		content[i] = content[i].toLowerCase()

	}
	for(i = 0; i < content.length; i++){	
		for( j = 0; j < i; j++){
			if(content[i] === content[j]) {
				count++;
			} 
	}
	wordList.push({
					word: content[i],
					occurance: count
					})
	
	count = 1;
	}

	for(i = wordList.length-1; i > 0; i--){
		if(wordList[i].occurance > 1){
			for(j = 0; j < i; j++){
				if(wordList[i].word === wordList[j].word){
					wordList[j].word = 0
				}
			}
		}
	}
	for(i = 0; i < wordList.length; i++) {
		if(wordList[i].word == 0){
			wordList.splice(i, 1)
			i--
		}
	}
	return wordList;
}
var total = content.length
var res = wordCount()
console.log(res.sort(function(a, b) {return a.occurance - b.occurance}));
console.log("Number of total words is " +total)
console.log("Number of words exculding stop words is " +content.length)
console.log("Number of words exculding duplicates and stop words is " +res.length)
