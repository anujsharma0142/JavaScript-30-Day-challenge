// To Be or notToBe || leetcode 2704

var expect = function(val) {
    return obj ={
       toBe(val1){
           if(val===val1) return true
           else throw  new Error("Not Equal");
       },
       notToBe(val1){
           if(val !== val1) return true
           else throw new Error ("Equal");

       }
   }
   
};