// Write a function, anagrams, that takes in two strings as arguments. The function should return a boolean indicating whether or not the strings are anagrams. Anagrams are strings that contain the same characters, but in any order.

// const anagrams = (s1, s2) => {
//     // todo
//     if (s1.length!==s2.length) return false
//     var s1map = {}
//     var s2Map = {}
//     for (let i = 0;i<s1.length;i++){
//         if (s1[i] in s1map){
//             s1map[s1[i]] = s1map[s1[i]]+1
//         }else {
//             s1map[s1[i]] = 1
//         }
//         if (s2[i] in s2Map){
//             s2Map[s2[i]] = s2Map[s2[i]]+1
//         }else {
//             s2Map[s2[i]] = 1
//         }
//     }
//     for (x in s1map){
//         if (!(x in s2Map && s1map[x] === s2Map[x] )) return false

//     }
//     return true
// };

//better solution

const anagrams = (s1,s2)=>{
    const count = {}
    if (s1.length!==s2.length) return false
    for (let char of s1){
        if (!(char in count)){
            count[char] = 0
        }
            count[char] += 1
        
    }
    console.log(count,"1")
    for (let char of s1){
        if (count[char] === undefined){
            return false
        } 
        else {count[char] -= 1}
    }
    console.log(count)
    for (let char in count){
        if (count[char] !==0) return false 
    }
    return true

}

a = anagrams('monkeyswrite', 'newyorktimes'); // -> true
console.log(a)