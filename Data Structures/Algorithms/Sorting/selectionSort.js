const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]


function selectionSort(array){
    for(let i=0; i<array.length; i++){
        for (let j=0;j<array.length;j++){
            if(array[i]<array[j]){
                let temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
        }
    }
    return array
}

console.log(selectionSort(numbers))