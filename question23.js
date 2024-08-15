function getarray(size){
    var arr=[];
    for(var i=0;i<size;i++){
        arr[i]=prompt("Enter number for row "+(i+1)+"seperated by space").split(' ').map(Number);

    }
    return arr;
}

function display(array,size){
    for(i=0;i<size;i++){
        document.write(array[i].join(' ')+"<br>");
    }
}

function main(){
    var size=parseInt(prompt("Enter the size of array: "));
    document.write("size of array: "+size+"<br>");
    var a1=getarray(size);
    document.write("array values are:<br>");
    display(a1,size);

}
main();