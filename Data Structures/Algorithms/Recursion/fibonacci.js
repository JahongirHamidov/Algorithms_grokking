// given a number n return the index value of the fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
// the pattern of the sequence is that each value is the sum of the 2 previous values,
// that means that for N=5 => 2+3

function fibonacciIterative(n){   //O(n)
    const list = [0,1]
    if(n<0){
        return 'please enter a valid number'
    } else if(n<2 && n>=0){
        return list[n]
    } else {
        for(i=2;i<=n;i++){
            list[i] = list[i-1]+list[i-2]
        }
        return list[n]
    }
}

console.log(fibonacciIterative(100))

function fibonacciRecursive(n){   //O(2^n)
    if(n<2){
        return n
    }
    return fibonacciRecursive(n-1)+fibonacciIterative(n-2)
}
console.log(fibonacciRecursive(100))