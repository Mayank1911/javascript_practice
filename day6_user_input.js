const readlineSync=require('readline-sync');

const student_id=parseInt(readlineSync.question('Enter the Student_Id'));

const student_roll_num=parseInt(readlineSync.question('Enter the Student Roll Number'));

stud_info=[student_id,student_roll_num];
console.table(stud_info);
