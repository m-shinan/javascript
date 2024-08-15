function tax(){
    var annTax=parseInt(prompt("enter ypur annual income:"));
    if (annTax<=250000){
        document.write("no tax");
    }
    else if(annTax>250000 && annTax<=500000){
        document.write("your income tax is: "+0.05*annTax);
    }
    else if(annTax>500000 && annTax<=1000000){
        document.write("your income tax is: "+0.2*annTax);
    }
    else if(annTax>1000000 && annTax<=5000000){
        document.write("your income tax is: "+0.3*annTax);
    }
}
tax();