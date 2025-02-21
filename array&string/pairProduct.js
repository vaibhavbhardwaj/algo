const pairProduct = (numbers, targetProduct) => {
    // todo
    const previousNums = {}
    for (let i = 0;i< numbers.length;i++){
        const num = numbers[i]
        const complement = targetProduct/num
        if (complement in previousNums){
            return [i , previousNums[complement]]
        }
        previousNums[num] = i
        
    }
    
  };

x = pairProduct([3, 2, 5, 4, 1], 10); // -> [1, 2]
console.log(x)