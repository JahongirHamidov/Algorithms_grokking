function addTo80(n) {
    return n+80
}

let cache = {}

function memoizedAddTo80(n) {
    if(n in cache){
        return cache[n]
    } else{
        cache[n] = n+80
        return cache[n]
    }
}

console.log(memoizedAddTo80(5))