function prime(num){
    if(num<=1){
        return false;
    }
    for(let i=2;i<=num/2;i++){
        if(num%i===0){
            return false;
        }
    }
    return true;
}
var userinput=parseInt(prompt("enter a number"));
if (prime(userinput)){
    console.log(`${userinput} is a prime number`);
}
else{
    console.log(`${userinput} is not a prime number`);
}
