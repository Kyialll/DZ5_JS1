function Numbers(...numbers){
    let sum=numbers.reduce((a,b)=>a+=b)
    let result=sum/numbers.length
    console.log(result.toFixed(2))
}
Numbers(13,85,34,905)