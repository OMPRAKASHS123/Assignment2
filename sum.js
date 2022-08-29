
var sum1=0;
var sum2=0;
for(let x=0;x<1000;x++){
    if(x%3==0){
        sum1=sum1+x;
    }

    if(x%5==0){
        sum2=sum2+x;
    }
}
console.log(sum1+sum2);
