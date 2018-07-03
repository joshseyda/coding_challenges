function reverseString(str) {
    var finalString = "";
    for (var last = str.length - 1; last >= 0; last--) {
        finalString += str[last];
        console.log(finalString);
    }
    return finalString;
}

reverseString("quip");