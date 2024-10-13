/*Switch Case
It is a jumping statements which is used for 
jumping from one case to another case
In this multiple conditions get used and checks that which condition is 
going to be true
Here We are gonna do calculator program
In this will do all the arithmatic operations */

const readlineSync=require('readline-sync');
let operator=readlineSync.question('Enter the operator:');
let num1=parseFloat(readlineSync.question('Enter the first number'));
let num2=parseFloat(readlineSync.question('Enter the second number'));
switch(operator){
    case '+':
        console.log(`The result is ${num1+num2}`);
        break;
        case '-':
            console.log(`The result is ${num1-num2}`);
            break;
            case '*':
                console.log(`The result is ${num1*num2}`);
                break;
                case '/':
                    console.log(`The result is ${num1/num2}`);
                    break;
                    default:
                        console.log('Invalid Operator');
}