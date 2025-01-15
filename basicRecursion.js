const count = (n)=>{

    if (n === 0){
        return
    }
    console.log("entering",n)
    count (n-1)
    console.log("return",n)
}

count(5)