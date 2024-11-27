// Counter II | Leetcode 2665


var createCounter = function(init) {
    const n = init
   
        function increment(){
            return init += 1
        }
        function decrement(){
            return init -= 1
        }
        function reset(){
            return init = n
        }
        return{
            increment, decrement, reset
        }
}

