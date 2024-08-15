function pattern(){
    var k=1;
    for(var i=1;i<=4;i++){
        for(var j=1;j<=i;j++){
            if(j<=i){
                document.write(k+" ");
                k++;
             
            }
        
        }
        document.write("<br>");
    }
}
pattern();