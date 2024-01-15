// Write two functions that finds the factorial of any number. One should use recurion and 
// the other should use loops

function findFactorialRecursive(number){
    let answer = 1
    answer = number*findFactorialIterative(number-1)
    return answer
}


function findFactorialIterative(number){
    let answer = 1
    while(number>0){
        answer*=number
        number--
    }
    return answer
}

console.log(findFactorialIterative(10))
console.log(findFactorialRecursive(10))