//While Loops
//While loops are used to repeat a block of code while a certain 
//condition is true.
/*
While has three phases
1. Initialization
2. Condition
3. Increment
i=0; //initailization
while(i<5) //condition
i++; //invcrement/decrement

i=0;
while(i<=10)
{
    i++;
    console.log(i);
}
Where while and for is used what basic both contains and exactly where 
it get used
While is used when we don't know the number of times we want to repeat the code 
For is used when we know the number of times we want to repeat the code 

Amstrong Number will be a better example for understanding the working of while 
Amstrong Number is a number which is equal to the sum of the cubes of it's digits
Example: 153 = 1^3 + 5^3 + 3^3
*/

og_number=153;
sum=0;
temp=og_number;
while(temp>0){
    remainder=temp%10; // 153%10; 15.3
    sum+=Math.pow(remainder,3); // sum=0+27;sum=27
    temp=Math.floor(temp/10); // 153/10=15.3;15.3/10; 1.53
}
if(sum==og_number){
    console.log("Amstrong Number"); 
}
else{
    console.log("Not Amstrong Number");
}

//Palindrome Number  eg.14641
n=12321;
var rev=0,r,copy,n;
copy=n;
while(n > 0){
    r = n % 10;
    rev = rev * 10 + r;
    n = Math.floor(n/10);
}
if(copy==rev){
    console.log("Palindrome Number");
}
else{
    console.log("Not Palindrome Number");
}

// Krishnamurthy Number

num=145;
sum=0;
while (num > 0) {
    let digit = num % 10;
    let fact = 1;
    for(let i=2;i<=digit;i++){
        fact*=i;
    }
    sum += fact;
    num = Math.floor(num / 10);
}
if (sum == num) {
    console.log("Krishnamurthy Number");
}
else {
    console.log("Not Krishnamurthy Number");
}
