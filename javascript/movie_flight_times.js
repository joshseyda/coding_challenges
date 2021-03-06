// Users on longer flights like to start a second movie right when their first one ends, but they complain that the plane usually lands before they can see the ending. 
// So you're building a feature for choosing two movies whose total runtimes will equal the exact flight length.

// Write a program that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes) and returns a boolean indicating whether there are two numbers 
// in movieLengths whose sum equals flightLength.

// When building your method:

// 1. Assume your users will watch exactly two movies
// 2. Don't make your users watch the same movie twice

let movieLengths = [70, 120, 230, 93, 89, 45, 168, 345];
let flightLength = 165;
let filmLengths = [600, 320, 150, 30];


function movieFlightChecker(film, flight) {
    let counter = 0;
    for (let i = 0; i < film.length; i++) {
        for (let n = i + 1; n < film.length; n++) {
            if (film[i] + film[n] === flight) {
                return true;
            } else {
                //do nothing
            }
        }
    }
    return false;
}

movieFlightChecker(filmLengths, flightLength);