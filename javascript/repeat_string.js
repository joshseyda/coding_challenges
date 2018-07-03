function repeat(quot, digit) {
    var finalString = "";
    for (digit; digit > 0; digit--) {
        finalString += quot;
    }
    return finalString;
}

repeat("the", 5);