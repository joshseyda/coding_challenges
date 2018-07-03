//needs to be reformatted for single letter words and punctuation
function palinDro(userInput) {
    let smallTxt = userInput.split(' ').join('').toLowerCase();
    let revInp = smallTxt.split("").reverse().join("");
    if (smallTxt === revInp) {
        console.log("congratulations! you found a palindrome!");
    } else {
        console.log("thats not a palindrome...");
    }
}

palinDro('taco cat');