var size=parseInt(prompt("enter the size of array"));
var arr=[];

function getArray(){

    document.write("enter the values of the array:<br>");
    for(let i=0;i<size;i++){
        arr[i]=parseInt(prompt("enter the values for index "+i+": "));
    }
    return arr;
}

function displayArray(array) {
    console.log("Array values:");
    array.map(function (value) {
        console.log(value);
    });
}
function main(){
    var myArray;
    myArray = getArray();
    displayArray(myArray);
}
main();