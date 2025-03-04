// let a= 10;
// let b = a ;
//  a++;
//  console.log(a); 11
//  console.log(b); 10
//  let a = {value:10};
//  let b  = a;
//  a.value++;
//  console.log(a.value); // 11
//  console.log(b.value); // 11
//   let  a = { value:10};
//   function inc(a){
//     a.value++;
//   }
// inc(a);
// console.log(a.value);
// for in loop
// let rectangle = {
//     length: 2,
//     breadth: 3,
//                        // FOR IN
// }
// // // keys are reflected through key variable, values are reflected through rectangle[key]
// for (let key in rectangle) {
//     console.log(key, rectangle[key]);  // use lowercase 'key'
// }

                        // FOR OF
// for(let key of Object.entries (rectangle)){
//     console.log(key);
// }

  


// if ('color ' in rectangle){
//     console.log('Present');

// }
// else{
//     console.log('ABSENT')
// }


// OBJECT CLONING
//  iteration 
//  assign 
//  spread
//  garbage collection 
// it finds such variable that is not in use  -- unused variable
// we have no control over it
// deallocation

//  let src = {
//   a: 10,
//   b :20,
//   c:30
   
//  };
//  let dest = {};
//   for (let key in src ){
//     dest [key] = src [key];
//   }
//   console.log(dest);
//   src.a++;
//   console.log(dest);
 // assign function
//  let src = {
//      a :10,
//       b: 20 ,
//        c: 30

//  };
//   let dest = Object. assign({} , src)
//   console.log (dest);
//   src.a++;
//   console.log(dest); 

  let src = {
    a :10,
     b: 20 ,
      c: 30

};
 let dest =  {...src};
  console.log(dest);
  src.a++;
  console.log(dest);