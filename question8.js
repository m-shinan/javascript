function Sum(){
    var num1 = document.getElementById("n").value;
    var sum=0;
    var i;

    for(i=0;i<=num1;i++){
        if(i%2==1){
            document.write(i+"+");
            sum=sum+i;
        }

    }
    document.write("<br>"+"Sum of odd numbers for a given limit is: <br/>"+sum);
}