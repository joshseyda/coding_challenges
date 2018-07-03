function removeSmallest(numbers) {
    let sortedList = numbers.slice().sort();
    let smallNumFree = numbers.slice();
    let pariah = numbers.indexOf(sortedList[0]);
    let smallNumFree0 = smallNumFree.slice(0, pariah);
    let smallNumFree1 = smallNumFree.slice(pariah + 1);
    sortedList = smallNumFree0.concat(smallNumFree1);
    return sortedList;
}

removeSmallest([2, 2, 1, 2, 1]);