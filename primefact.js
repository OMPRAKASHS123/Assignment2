function prime(){
    let count;
    for(let i=1;i<1000;i++){
        count=0;
        for(let j=2;j<i;j++){
            if(i%j==0){
                count++;
                break;
            }
        }
        if((count==0) && (i!=1)){
            console.log(factorial(i))
        }
    }

}
function factorial(n){
    let fact=1;
    for(let i=1;i<=n;i++){
        fact=fact*i;
    }
    return fact;
    
}
prime();
