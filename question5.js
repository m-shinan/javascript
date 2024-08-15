function status(){
    var a=document.getElementById("m").value;
    
    if(a>=90){
        document.write("Your grade is A");
    }
    else if(a>=80){
        document.write("Your grade is B");
    }
    else if(a>=70){
        document.write("Your grade is C");
    }
    else if(a>=60){
        document.write("Your grade is D");
    }
    else if(a>=50){
        document.write("Your grade is E");
    }
    else{
        document.write("You have failed");
    }
}