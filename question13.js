let string=prompt("enter a word");

function ReverseString() {
    var revString=string.split('').reverse().join('');
    if(revString==string){
        alert(string+" is palindrome");
    }
}
ReverseString();
