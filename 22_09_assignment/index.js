// write a program to find result of the student 
// 1)student have three subjects
// 2)each sub pass mark is 35
// 3)if the student is pass then print totalmarks,grade,percentage
// 4)if the student is fail then fail will print
let chemistry=100;
let physics=35;
let biology=35;
let total = chemistry+physics+biology;
percentage=total/3
if(chemistry >=35 && physics >=35 && biology >=35){
    console.log(`student is passed with marks: ${total}/300`);
    console.log(`percentage: ${Math.round(percentage)}%`);
}
else{
    console.log('fail');
}   
if(chemistry>=35 && physics>=35 && biology>=35 && total>=250 && total<=300){
    console.log(`grade: A`);
}
else if(chemistry>=35 && physics>=35 && biology>=35 && total<=249 && total>=200){
    console.log(`grade: B`);
}
else if(chemistry>=35 && physics>=35 && biology>=35 && total<=199 && total>=150){
    console.log(`grade: C`);
}
else if(chemistry>=35 && physics>=35 && biology>=35 && total<=149 && total>=105){
    console.log(`grade: D`);
} 

