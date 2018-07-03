//Your Task: 
// Fix the encode function so it passes the following test cases:
// encode("dog")			=>		"100:111:103"
// encode("cat")			=>		"99:97:116" 
// encode("My name is Groot") 	=>	"77:121:32:110:97:109:101:32:105:115:32:71:114:111:111:116"
// Fix the decode function so passes the following test cases:
// decode("99:97:116")  		=> cat
// decode("100:111:103")	=> dog
// decode("77:121:32:110:97:109:101:32:105:115:32:71:114:111:111:116")		=> My name is Groot

function encode(word) {
    //somewhere to store the converted caracters
    let result = [];
    //next we loop over each character in the string.
    for (let position = 0; position < word.length; position++) {
        //and save the charcode to the array
        result.push(word.charCodeAt(position));
    }
    // and return that list of codes, separated by colons
    return result.join(':');
}

function decode(hash) {
    //split the code by semicolons!
    let arr = hash.split(':');
    // again somewhere to put our codes
    let result = [];
    //loop over the codes
    for (let code of arr) {
        //change the code back to the string character equivalent
        result.push(String.fromCharCode(code));
    }
    return result.join('');
}


let message = "My name is Groot";
let encodedMessage = encode(message);
let decodedMessage = decode(encodedMessage);


console.log(message);
console.log(encodedMessage);
console.log(decodedMessage);