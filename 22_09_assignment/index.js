// write a program to find result of the student 
// 1)student have three subjects
// 2)each sub pass mark is 35
// 3)if the student is pass then print totalmarks,grade,percentage
// 4)if the student is fail then fail will print
let chemistry=100;
let physics=45;
let biology=50;
let total = chemistry+physics+biology;
percentage=total/3*100
if(chemistry>=35 && physics>=35 && biology>=35){
    console.log(`student is passed with marks: ${total}`);
    console.log(`percentage: ${percentage}%`);
}
else{
    console.log('fail')
}
if(total>=250){
    console.log(`grade: A`)
}
else if(total<249 || total)