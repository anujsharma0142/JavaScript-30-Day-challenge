//2667. Create Hello World Function

// const createHelloWorld = function(){
//     return function(...args){
//         return "Hello World";

//     }
// }


// const hello = createHelloWorld();
// console.log(hello());
// console.log(hello(1, 2, null));     
// console.log(hello("Test"));       

//solution 2 

function createHelloWorld(){
    function f(){
        return "Hello World"
    }
    return f;
}