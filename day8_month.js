/*const readlineSync=require('readline-sync');
let operator=readlineSync.question('Enter the month:');

switch(operator){
    case 'jan':
        console.log(`There are 31 days in this month`);
        break;
        case 'feb':
            console.log(`There are 28 days in this month`);
            break;
            case 'mar':
                console.log(`There are 31 days in this month`);
                break;
                case 'apr':
                    console.log(`There are 30 days in this month`);
                    break;
                    case 'may':
        console.log(`There are 31 days in this month`);
        break;
        case 'jun':
        console.log(`There are 31 days in this month`);
        break;
        case 'jul':
        console.log(`There are 30 days in this month`);
        break;
        case 'aug':
        console.log(`There are 31 days in this month`);
        break;
        case 'sep':
        console.log(`There are 30 days in this month`);
        break;
        case 'oct':
        console.log(`There are 31 days in this month`);
        break;
        case 'nov':
        console.log(`There are 30 days in this month`);
        break;
        case 'dec':
        console.log(`There are 31 days in this month`);
        break;
                    default:
                        console.log('Invalid month');
} */


const readlineSync=require('readline-sync');
let year=readlineSync.question('Enter the year:');
if(year%4==0){
    console.log('This is a leap year');
}
else{
    console.log('This is not a leap year');
}