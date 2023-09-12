// O(n^2) ==> O(n)

const array1 = ['a','b', 'c', 'x']
const array2 = ['z', 'y', 'x']


function isContains(array1, array2){
    let map = {}

    for (let i=0; i<array1.length; i++){
        if(!map[array1[i]]){
            const item = array1[i]
            map[item] = true
        }
    }

    for (let j=0; j<array2.length; j++){
        if(map[array2[j]]){
            return true
        }
    }
    return false
}







console.log(isContains(array1, array2))