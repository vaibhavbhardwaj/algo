const fibo = (n)=>{
    if (n <= 1){
        return n
    }
    
    return fibo(n-1) + fibo (n-2)
    console.log(n)

}
console.log(fibo(4))