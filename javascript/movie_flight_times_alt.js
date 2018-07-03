//sort the array from lowest to highest.
//create a variable LOWEST that holds the first number in the array.  It will be the lowest number in the array.
//create a variable HIGHEST that holds the last number in the array.  It will be the highest number in the array.
//HIGHEST + LOWEST = total
//if total == flightTime return true;

//if the total is larger than the flightTime,
//then move the index HIGHEST one index to the left (to the next lower number)
//if the number is smaller than the time,
//then move the index LOWEST to the right 
//keep comparing until you have reached a match.

function matchTimes(movieTimes, flightTime) {

    movieTimes = movieTimes.sort((a, b) => a - b);
    console.log(movieTimes);

    let startIndex = 0;
    let endIndex = movieTimes.length - 1;

    while (startIndex < endIndex) {
        //add the first number in the array and the last number of the array:
        let total = movieTimes[startIndex] + movieTimes[endIndex];
        if (total === flightTime) {
            console.log(`the matching times are ${movieTimes[startIndex]}min && ${movieTimes[endIndex]} min`);
            return true;
        } else if (total > flightTime) {
            endIndex--;
        } else if (total < flightTime) {
            startIndex++;
        }
    }
    return false;

}


matchTimes([70, 120, 230, 93, 89, 45, 168, 345], 165);