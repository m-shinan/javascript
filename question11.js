let a=parseInt(prompt("enter the size of array"));
let b=prompt("enter the array").split(',').map(Number);
console.log("The enetered array is "+b);


function countEvenNumbers(){
    const c=b.map(x => x%2===0 ? x:undefined).filter(x => x!==undefined);
    const count=c.length;
    
    console.log("No.of even numbers in the given array is "+count);
}
countEvenNumbers();