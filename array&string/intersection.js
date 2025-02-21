const intersection = (a, b) => {
    // todo
    const setMap = new Set()
    const result = []
    for (let i in a){
        setMap.add(a[i])
    }
    console.log(setMap)
    for (let j in b){
        if (setMap.has(b[j])){
            result.push(b[j])
        }
    }
    return result
  };

  intersection([4,2,1,6], [3,6,9,2,10]) // -> [2,6]
