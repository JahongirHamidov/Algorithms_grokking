function addTo80(n) {
    return n+80
}


function memoizedAddTo80() {
    let cache = {}
    // closure
    return function(n) {
        if(n in cache){
            return cache[n]
        } else{
            console.log('long')
            cache[n] = n+80
            return cache[n]
        }
    }
}

const memoized = memoizedAddTo80()
console.log(memoized(5))
console.log(memoized(5))
console.log(memoized(6))