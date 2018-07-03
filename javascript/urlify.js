// using convenient built in methods
// const urlify = (str) => {
//   let splitString = str.split(" ");
//   let newStr = splitString.join("%20");
//   return newStr
// }

// urlify("this is a string");

// slightly more verbose
const urlify = (str) => {
    let newStr = "";
    let strLength = str.length;
    let i = 0,
        k = 0;
    while (i < strLength) {
        if (str[i] === " ") {
            newStr += str.substring(i, k) + "%20"
            k = i + 1
        }
        i++
    }
    newStr += str.substring(k, strLength)
    return newStr;
}
urlify("this is a string");