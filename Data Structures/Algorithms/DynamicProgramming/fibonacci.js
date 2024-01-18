let calculations = 0
function fibonacci(n){ // O(2^n)
    calculations++
    if(n<2){
        return n
    }
    return fibonacci(n-1) +fibonacci(n-2)
}

console.log(fibonacci(20))
console.log('we did operations:'+calculations)