// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

function removeSmallest(numbers) {
    let sortedList = numbers.slice().sort(function(a, b) { return a - b });
    let smallNumFree = numbers.slice(),
        pariah = numbers.indexOf(sortedList[0]);
    sortedList = (smallNumFree.slice(0, pariah)).concat(smallNumFree.slice(pariah + 1));
    return sortedList;
}

removeSmallest([2, 2, 1, 2, 1]);