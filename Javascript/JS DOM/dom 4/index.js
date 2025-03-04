// PROMISE

// let waada1 = new Promise(function(resolve , reject ){
// setTimeout(()=> {
//     console.log('set timeout  started');

// } , 2000);
// resolve(true);
// })

//   let output =  waada1.then(() => {
//     let waada2 =  new Promise(function( resolve , reject){
//         setTimeout(()=> {
//             console.log('set timeout2  started');
        
//         } , 2000);
//         resolve("waada2 resolved");
//     })
    return waada2;
})
output.then((value) => console.log(val));
 
async function utility(){
    

let lucknowkamausam = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(" lucknow mw garmi ni ja rahi hai");
    },1000)
});
let delhikamausam = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(" winters come pleasse");
    },1000)
});
let lm = lucknowkamausam;
let dm = delhikamausam;
// }
// FETCH API 
let obj ={
    heading :"head"
};
async  function utility(){
let content =  await fetch('https://jsonplaceholder.typicode.com/todos/1');
let output = await content.json();
console.log(output);
}
utility();