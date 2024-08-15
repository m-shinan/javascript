function mult(){
    var a=document.getElementById("n").value;
    
    for(let i=0;i<=10;i++){
        result=a*i;
        document.write(a+"*"+i+"="+result+"<br>");
    }
}