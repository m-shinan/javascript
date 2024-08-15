function status(){
    var a=document.getElementById("n").value;
    switch(a){
        case "1":
            document.write("Sunday<br/>");
            break;
        case "2":
            document.write("Monday<br/>");
            break;
        case "3":
            document.write("Tuesday<br/>");
            break;
        case "4":
            document.write("Wednesday<br/>");
            break;
        case "5":
            document.write("Thursday<br/>");
            break;
        case "6":
            document.write("Friday<br/>");
            break;
        case "7":
            document.write("Saturday<br/>");
            break;
        default:
            alert("Please enter a number between 1 and 7.");
            
    }
}