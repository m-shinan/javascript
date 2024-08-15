function mult(){
    var size=parseInt(prompt("enter the size of array: "));
    var input=prompt("enter array elemnts").split(',');
    var a=input;
    var a1=[];

    for(var i=0;i<size-1;i++){
        a1[i]=parseInt(a[i])*parseInt(a[i+1]);
        document.write(a1[i]+"<br>");
    }
}