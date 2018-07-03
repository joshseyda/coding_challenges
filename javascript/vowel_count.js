function vowelCount(str) {
    var count = 0;
    var vowels = "aeiou";
    for (var index = 0; index < str.length; index++) {
        if (vowels.indexOf(str[index]) > -1) {
            count++;
        }
    }
    return count;
}

vowelCount("good job");