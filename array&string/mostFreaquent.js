// Write a function, mostFrequentChar, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

// You can assume that the input string is non-empty.

const mostFrequentChar = (s) => {
    // todo
    const count = {}
    for (let char of s){
        if (!(char in count)){
            count[char] = 0
        }
        count[char]+=1
    }
    //console.log(count)
    let max = null
    for (let char of s){
        if (max === null || count[char] > count[max]){
            max = char
        }
            
    }
    console.log(max)
    return max
}

mostFrequentChar('bookeeper'); // -> 'e'
mostFrequentChar('david'); // -> 'd'
mostFrequentChar('abby'); // -> 'b'
mostFrequentChar('mississippi'); // -> 'i'
mostFrequentChar('potato'); // -> 'o'
mostFrequentChar('eleventennine'); // -> 'e'
mostFrequentChar("riverbed"); // -> 'r'

  