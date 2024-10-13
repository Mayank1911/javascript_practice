/* Else if Ladder
The ladder stands repeating else if 's in the code in between if and else 
where this get works
The else if ladder works in the multiple conditional operations
As if neds to perform operations like creating a report card creating or selecting any coupon code */
const readlineSync=require('readline-sync');
let marks=parseFloat(readlineSync.question('Enter your marks:'));
if(marks>=90 && marks<=100)
/*The above conditions explains that the marks should be greter than 90 or 
equals to 90 and the marks should be less than 100 or equal to 100,So automatically
range specifies here is marks should lie in between 90 to 100 */
{
    console.log('You got O grade');
}
else if(marks>=80 && marks<90)//Here range will be 80 to 89
{
    console.log('You got A grade');
} 
else if(marks>=70 && marks<80)//Here range will be 70 to 79
{
    console.log('You got B grade');
} 
else if(marks>=60 && marks<70)//Here range will be 60 to 69
{
    console.log('You got C grade');
}
else if(marks>=50 && marks<60)//Here range will be 50 to 59
{
    console.log('You got D grade');
} 
else if(marks>=40 && marks<50)
{
    console.log('You got E grade');
} 
else if(marks>=35 && marks<40)
{
    console.log('Just Pass by destiny/luck (PROMOTED)')
}
else{
    console.log('Better luck next time');
}