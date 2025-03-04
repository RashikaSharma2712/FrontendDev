// adding 100 para
// const t1 = performance.now();
// for(let i=1 ;i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = " this is a para " +i ;
//     document.body.appendChild(newElement);
    

// }
//  // THIS IS A  BIT  OPTIMIZED CODE   
// const t2 = performance.now();
// console.log(" this took "  + (t2-t1) + "ms");
 
// const t3 = performance.now();
// let myDiv = document.createElement('div'); // there is no needof div we can further optimize it 
// for (let i =1 ; i<=100 ; i++){  
//     let element = document.createElement('p');
//     element.textContent = 'this is a para' + i ;
//     myDiv.appendChild(element);

// }
// document.body.appendChild(myDiv);
// const t4 = performance.now();
// console.log("this took" +  (t4-t3) +  " ms ");





// // reflow ( the reflow is the process of calculating the pixel dimention of page element)...... repaint( the process f drwaing pixel)
// // best thing is we should try to use less as less reflow   and repaint 
 
// let fragment = document.createDocumentFragment();
// for(let i=1 ;i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = " this is a para " +i ;
//     fragment.appendChild(newElement);
// }
// document.body.appendChild(fragment);




// // the call stack --- single threading....... -- one command at a time  ...( js is single threaded language)


// function addPara(){
//     let para = document.createElement('p');
//     para.textContent = ' js is single';
//     document.body.appendChild(para);
// }
// function appendNewMessage(){
//     let para = document.createElement('p');
//     para.textContent= " kyaaa haal chaal";
//     document.body.appendChild(para);

// }
// addPara();
// appendNewMessage();
// // js does not execute multiple lines / function at the same time 
// // asynchronous code = handling is done by browser  -- js event loop
// // document.addEventListener();


// // set time out method
// setInterval(function() {
//     console.log('hello everyone');
// }, 5000);

// setInterval(function() {
//     console.log('hello everyone');
// }, 10000);

 


   
 // MODERN JS + DOM  4 LECTURE



  // Asynchronous ---- code jiska pata hai ki hojyega par ni pata kab hoga   -- eventt loop
//   function sync(){
//     console.log('first');
//   }
//   sync();
//   console.log('second');
//   this  code is a example of asynchronous code
// setTimeout(function () {
//     console.log('third');

// },3000)
// function sync (){
//     console.log('first');

// }
// sync();
// console.log('seond');

// API = application programming interface -- api mera naukar hai
//   software component  ----------------- api provides communications  between these two------------------------- sofftware component
// features of async code ----- clean and concise , better error handling , easier bugging , find outcome
// promises-- async promises   resolve reject
let meraPromise = new Promise(function(resolve , reject){
    setTimeout (function){
        console.log(' i am  an inside promise');

    },5000);
    resolve(2233);

});
console.log('pehla ');
