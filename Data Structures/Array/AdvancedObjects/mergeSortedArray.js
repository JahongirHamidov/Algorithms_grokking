// mergeSortedArrays([0,3,4.31], [4,6,30])
// [0,3,4,4,6,30,31]

function mergeSortedArrays(arr1, arr2){
    const mergedArray = []
    let array1Item = arr1[0]
    let array2Item = arr2[0]
    let i = 1
    let j = 1


    if(arr1.length === 0){
        return arr2
    }
    if(arr2.length === 0){
        return arr1
    }
    while (array1Item || array2Item){
        if(!array2Item || array1Item<array2Item){
            mergedArray.push(array1Item)
            console.log("array1Item")
            array1Item = arr1[i]
            i++
        } else 
        // (array1Item>array2Item)
        {
            mergedArray.push(array2Item)
            console.log("array2Item")
            array2Item = arr2[j]
            j++
        } 
        // else {
        //     mergedArray.push(array1Item)
        //     mergedArray.push(array2Item)
        //     console.log("first")
        //     array1Item = arr1[i]
        //     array2Item = arr2[j]
        //     i++
        //     j++
        // }
    }
   

    return mergedArray
}

// console.log(mergeSortedArrays([0,3,4],[4,6,30]))

const array = [[1,2], [3,4]]
console.log(array[1])