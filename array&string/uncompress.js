const uncompress = (s) => {
    // todo
    const numbers = ["0","1","2","3","4","5","6","7","8","9"]
    let str = ""
    let strMap = {}
    for (let i = 0;i<s.length;i++){
        //strMap[s[i+1]] = s[i]
        //i+=1
        
        var numStr = ""
        let j = i
        while (s[j] in numbers){
            numStr = numStr + s[j]
            j+=1
        }
        let num = parseInt(numStr)
        let char = s[j]
        console.log(num,char)
        for (let k = 0; k < num ;k++){
            str = str + char
        }
        i = j
        
        //console.log(numStr)//
    }
    console.log(str)
    
  };

uncompress("2c3a1t")
uncompress("4s2b"); // -> 'ssssbb'
uncompress("2p1o5p"); // -> 'ppoppppp'
uncompress("3n12e2z"); // -> 'nnneeeeeeeeeeeezz'
uncompress("127y"); // ->'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'
