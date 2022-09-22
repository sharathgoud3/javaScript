// write a program to find result of the student 
// 1)student have three subjects
// 2)each sub pass mark is 35
// 3)if the student is pass then print totalmarks,grade,percentage
// 4)if the student is fail then fail will print
let maths=100;
let science=45;
let english=50;
let total = maths+science+english;
if(maths>=35 && science>=35 && english>=35){
    console.log(`student is passed with ${total} marks`)
}
else{
    console.log('fail')
}