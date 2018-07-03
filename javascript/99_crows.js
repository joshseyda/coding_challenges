// 2 - 99 Crows on the Wall
// Write a program in a new Repl.it that outputs all 100 lines of the classic song: 99 Crows on the Wall. You shouldn’t have to write 300 lines of JavaScript for this program at all - this is the perfect chance to use a for loop or while loop! 
// The program should start off like this: 
// 99 crows on the wall. 99 crows.
// 1 fell down and became a wight.
// 98 crows on the wall

// 98 crows on the wall. 98 crows.
// 1 fell down and became a wight.
// 97 crows on the wall

// 97 crows on the wall. 97 crows.
// 1 fell down and became a wight.
// 96 crows on the wall
// And ends with:
// 1 crow on the wall. 1 single crow.
// It fell down and became a wight.
// There's no one left to defend Westeros now.  


for (let count = 99; count >= 1; count--) {
    if (count > 2) {
        console.log(`${count} crows on the wall. ${count}  crows.`);
        console.log(`1 fell down and became a wight.`);
        console.log(`${count-1} crows on the wall.`);
        console.log("");
    } else if (count == 2) {
        console.log(`${count} crows on the wall. ${count}  crows.`);
        console.log(`1 fell down and became a wight.`);
        console.log(`${count-1} crow on the wall.`);
        console.log("");
    } else {
        console.log("1 crow on the wall. 1 single crow.");
        console.log("It fell down and became a wight.");
        console.log("There's no one left to defend Westeros now.");
    }
}