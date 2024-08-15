function status(){
    var a=document.getElementById("m").value;
    
    if(a>=50){
        document.write("You have passed");
    }
    else{
        document.write("You have failed");
    }
}