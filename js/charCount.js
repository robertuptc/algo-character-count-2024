function charCount(str) {
    str = str.toLowerCase()
    let alphaOnlyStr = removingNonAlpha(str)
    let characterDictionary = counting_letters(alphaOnlyStr)
    let arr_sorted = sorting(characterDictionary)
    return arr_sorted
};


function removingNonAlpha(str) {
    return str.replace(/[^a-zA-Z]+/g, "")
}


function counting_letters(str) {
    let charDict = {}

    for (let i = 0; i < str.length; i++) {
        if (str[i] in charDict) {
            charDict[str[i]] += 1
        } else {
            charDict[str[i]] = 1
        }
    }
    return charDict

}


function sorting(letters_dict) {
    // array = [letter, occurrences]
    let letters_arr = Object.keys(letters_dict).map(function(key) {
        return [key, letters_dict[key]]
    })

    // sorting based on number of occurences
    let initial_sort = letters_arr.sort(function(a, b) {
        return b[1] - a[1]
    })

    // ties being sorted by alphabet
    let second_sort = initial_sort.sort(function(a, b) {
        if (b[1] == a[1]) {
            return a[0].localeCompare(b[0])
            }
    })
    return second_sort
}


module.exports = {charCount}