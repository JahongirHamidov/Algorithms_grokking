// 2 arrays, if array1 contains array2's item return true else return false

let sum = 0
function isContains(array1, array2){
    for(let item of array1){
        for(let item2 of array2){
            if(item === item2){
                sum+=1
                return true
            } 
        }
    }
    if(sum === 0){
        return false
    }
}

const array1 = ['a','b', 'c', 'x']
const array2 = ['z', 'y', 'zz']

console.log(isContains(array1, array2))