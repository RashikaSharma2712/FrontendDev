arr = [1,3,5,6];
//n = arr.length;
console.log(arr);
//console.log(n); 
arr.push(8);// insert at end
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift(2); // add element in first index
console.log(arr);
// // we use squarebracket in js 
// //for array
// console.log(arr[2]);
// // C++ - vectors ,java =arraylist,javascript= array  hi sab kuch hai
arr.splice(3,0, 5,6); // start , delete , insert items   insert at middle 
console.log(arr);
//  if we want to check if the Node. is present in the array 
if(arr.indexOf(10) !=  -1);
 console.log("Present");
// present\
console.log(arr.includes(5));
//true
let courses  =[
    { no : 1 , name : 'rashika'},
    { no : 1 , name : 'falguni'},

];
console.log(courses);
// (2) [{…}, {…}]
console.log( courses.indexOf({ no : 1 , name : 'rashika' }));
//-1
// Cllback function ----- function under function
// let courses = courses.find(function(course)) {
//     return course.name == ' rashika';
// }


