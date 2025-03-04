//  factory  function function is als a object
//  constructor  function


 //                       FACTORY FUNCTION            
function createRectangle  (){      //camel case createRectangleFunction --- 
    let  rectangle = {
        length: 1,
        widtth:2,
        draw : function(){w
            console.log('drawing rectangle');
        }
    };
  return rectangle ;  
}

let rectangleObj1 = createRectangle (5,4);
let rectangleObj2 = createRectangle (2,3);
let rectangleObj3 = createRectangle (7,9);







//                           CONSTRUCTOR FUNCTIO

// constructor function - pascal notaion - first letter is always capital
// it will initialize the property ----- WORK  
function Rectangle (){
    this.length = 1;
    this.width = 2; // current in curr -- c++ ,,,  this
    this.draw = function (){
        console.log('drawing');
    }
}
// new is keyword that give emptyt  object 
let rectangleobject =new Rectangle();