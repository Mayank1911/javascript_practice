num1=20;
num2=4;
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);
console.log(Math.floor(num1/num2));//Floor division stands for it returns the closest lowest integral value
console.log(Math.pow(num1,num2));

//Simple Interest
//sp=(p*r*t)/100
let principle_amount=30000;
let rate_of_interest=8.35;
let time_given=20;
si=(principle_amount*rate_of_interest*time_given)/100;
console.log('Simple Interest is ',si);

//Compound Interest
//ci=p*(1+r/100)t
let principle=50000;
let rate=9;
let time=10;
ci=(principle*(Math.pow(1+rate/100),time));
console.log('Compound Interest is ',ci);

//Assignment Operator
num3=20;
num4=40;
num3+=num4;//Here firstly value of num4 has been assigned to num3 and then 
//it will perform an arithmatic operation
num3=num3+num4 
console.log(num3);

num3-=num4;//num3=num3-num4
console.log(num3);

num3+=num4;
console.log(num3);

//Swapping of two values
a=20;
b=40;
console.log(a,b);
c=a;
a=b;
b=c;
console.log(a,b);

//Swapping two numbers without third value
x=5;
y=10;
[x,y]=[y,x]
console.log(x,y);
