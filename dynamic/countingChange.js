const countingChange = (amount, coins) => {
    // todo
    console.log(coins.length)
    let count = 0
    if (amount === 0) return 1
    if (amount <0) return 0
    for (let i=0;i<coins.length;i+=1){
        console.log(amount,i)
        count = count + countingChange(amount-coins[i],coins)
    }
    return count
  };

x = countingChange(8, [1, 2, 3]);
console.log(x)