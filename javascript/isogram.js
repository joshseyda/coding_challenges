function checkString(text, index) {
    if ((text.length - index) === 0) { //stop condition
        return false;
    } else {
        return checkString(text, index + 1) ||
            text.substr(0, index).indexOf(text[index]) != -1;
    }
}

checkString("moOse", 0);

function isIsogram(str) {
    let caseFreeArray = str.toLowerCase().split("");
    console.log(caseFreeArray);
    let repCount = {};
    let used = [];
    for (let i = 0; i < caseFreeArray.length; i++) {
        let newChar = caseFreeArray[i];
        let counter = 0;
        for (let j = 0; j < caseFreeArray.length; j++) {
            if (caseFreeArray[j] === caseFreeArray[i]) { counter++; }
            repCount[newChar] = counter;
        }
        if (counter == 1) {
            return true;
        } else if (counter > 1) {
            return false;
        } else if (str === undefined) {
            return true;
        } else {
            return true;
        }
        used.push(newChar);
    }
}
isIsogram('');