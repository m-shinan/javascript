function main(){
    var size=parseInt(prompt("enter the size of array"));
    document.write("size of the array: "+size+"<br>");

    var array1=getarray(size);
    document.write("array1: "+"<br>");
    display(array1,size);
    var array2=getarray(size);
    document.write("array2: "+"<br>");
    display(array2,size);
    var resultarray=addarray(array1,array2,size);
    document.write("after adding:"+"<br>");
    display(resultarray,size);

}

main();

function getarray(size){
    var arr=[];

    for(var i=0;i<size;i++){
        arr[i]=[];
        arr[i]=prompt("enter values for row , seperated by space").split(' ').map(Number);

    }
    return arr;
}
function addarray(arr1,arr2,size){
    var resultarray=[];
    for(var i=0;i<size-1;i++){
        resultarray[i]=[];
        for(var j=0;j<=size-1;j++){
            resultarray[i][j]=arr1[i][j]+arr2[i][j];
        }
    }
    return resultarray;

}

function display(array,size){
    for(var i=0;i<size;i++){
        document.write(array[i].join(' ')+"<br>");
    }
}