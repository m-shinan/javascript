class Calculator{
    addition(num1,num2){
        return num1+num2;
    }

    subtraction(num1,num2){
        return num1-num2;
    }

    multiplication(num1,num2){
        return num1*num2;
    }

    division(num1,num2){
        if(num2===0){
            return "can't divide by zero";
        }
        return num1/num2;
    }
}

function main(){
    const calculator=new Calculator();

    // const choice=parseFloat(prompt("Enter  choice(1 to 4)"));
    const num1=parseFloat(prompt("Enter the first number:"));
    const num2=parseFloat(prompt("Enter the second number:"));

    const operation = parseInt(prompt("Enter the operation (1-4):\n1. Add\n2. Subtract\n3. Multiply\n4. Divide"));

    switch(operation){
        case 1:
            document.write("Result: "+calculator.addition(num1,num2))
            break;
        case 2:
            document.write("Result: "+calculator.subtraction(num1,num2))
            break;
        case 3:
            document.write("Result: "+calculator.multiplication(num1,num2))
            break;
        case 4:
            document.write("Result: "+calculator.division(num1,num2))
            break;
        default:
            alert("Invalid choice");
    }
}
