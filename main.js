function xify(str) {
    let output = '';
    for (let i = 0; i < str.length; i++) {
        output = output + 'x';
    }
    return output;
}

console.log(xify('hello'));
console.log(xify('hi there'));

// yellingChars =======================================

function yellingChars(ycs) {
    let output = '';

    for (let i = 0; i < ycs.length; i++) {
        output = output + ycs[i] + '!';



    }
    return output;
}

console.log(yellingChars('goodness'));

console.log(yellingChars('oh hello'));


// indexChars

function indexedChars(str) {
    let output = '';
    for (let i = 0; i < str.length; i++) {
        output = output + [i] + str[i];
    }
    return output;
}
console.log(indexedChars('Wow this is neat'));


//numberChars 

function numberChars(str) {
    let output = '';
    for (let i = 0; i < str.length; i++) {
        output = output + '(' + (i+1) + ')' +str[i];
    }
return output;
}

console.log(numberedChars('hello'));
console.log(numberChars('bye')); 


//exclaim 

console.log('\n' + "exclaim:");

function exclaim(str) {
    let output = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '?' || str[i] === '.') {
            output += '!';
        } else {
            output += str[i];
        }
    }
    return output;
}

console.log(exclaim('What are you doing? are you a fool.'));


//repeat it


function repeatIt(str, n) {
	
    let output = "";
for (let i = 0; i < n; i++) {
    output = output + str;
	}
	return output;
}

console.log("\nrepeatIt function:");
console.log(repeatIt("beetlejuice", 3));
console.log(repeatIt("oh hi!", 8));


//truncate


function truncate(str) {
    if (str.length > 15) {

        let output = ';'
        for (let i = 0; i < 15; i++) {
            output = output + str[i];

        }
        output = output + '...';
        return output;

    } else {
        
        return str;

    }
}

console.log(truncate('The fault, dear Brutus, is not in our stars, but in ourselves.'));
console.log(truncate("Well, that's just, like, your opinion man."));


//ciEmailify

function ciEmailify(str) {
    let output = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            output = output + '.';
        } else {
            output = output + str[i];
        }
    }
    output = output + '@codeimmersives.com'
    return output;
}

console.log(ciEmailify('colin jaffe'));
console.log(ciEmailify('Anthony DeRosa'));

// reverse

function reverse(str) {
    let output = '';
    for (let i = 0; i < str.length; i++) {
        const index = (str.length - 1) - i;
        const letter = str[index];
        output = output + letter;
    }
    return output;
}

console.log(reverse('colin'));
console.log(reverse('mesuara'));


//onlyVowels

function onlyVowels(str) {
    let output = '';
    for (let i = 0; i < str.length; i++) {
        const letter = str[i].toLowerCase();
        if (letter === 'e'||
        letter === 'i' ||
        letter === 'o'||
        letter === 'u' ||
        letter === 'a'
        ) {
            output = output + letter;
        }
    }
return output;
}

onlyVowels(onlyVowels('Colin Jaffe')); 
onlyVowels(onlyVowels('quickly'));
onlyVowels(onlyVowels('Anthony DeRosa')); 