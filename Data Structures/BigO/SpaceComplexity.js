function boo(n){
    for (let i=0; i<n.length; i++){
        console.log('boo')
    }
}

boo([1,2,3,4,5]) // Space complexity = O(1)

function arrayOfHiNTimes(n){
    let hiArray = []
    for (let i=0; i<n; i++){
        hiArray[i] = 'hi'
    }
    return hiArray
}

console.log(arrayOfHiNTimes(29))  // Space complexity = O(n)