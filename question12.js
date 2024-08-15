function sort() {
    const size = parseInt(prompt("Enter the size of array"));
    let  array = prompt("Enter the value of array").split(',');
    const sortedArray=array.sort((a, b)=>b-a);

    alert("Sorted array: "+ sortedArray.join(", "));
}
sort();