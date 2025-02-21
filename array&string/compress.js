const compress = (s) => {
    // todo
    let i = 0
    let j = 0
    let str = ""
    while ( j <= s.length){
        let count = 1
        console.log(i,j,count)
        if (s[i] === s[j]){
            j = j+1      
            
        }else{
            const num = j - i
            str = str + parseInt(num) + s[i]
            i = j
        }
        
        
        
       
    }
    console.log(str)
  };

  compress('ccaaatsss'); // -> '2c3at3s'
