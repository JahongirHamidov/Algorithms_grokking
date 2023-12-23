// Google question
// Given an array = [2,5,1,2,3,5,1,2,4]
// It should return 2
// Explanation: The number 2 appears twice in the array. So it is the most frequent element and its frequency is 2.
// Because the number 2 appears twice and it is the most frequent.

function findMostFrequent(arr) {
    for (let i=0; i<arr.length; i++){
        for (let j=i+1; j<arr.length; j++){
            console.log(`i = ${i}`)
            console.log(`j = ${j}`)
            if(arr[i] === arr[j]){
                return arr[j]
            }
            i++
        }
    }
    return undefined
} // O(n^2) => O(a*b) time complexity
// O(1) space complexity



function firstRecurringCharacter(input){
    const map = {}
    for (let i=0; i<input.length; i++){
        if (map[input[i]]){
            return input[i]
        } else {
            map[input[i]] = i
        }
    }
    return undefined
} // O(n) time complexity


console.log(findMostFrequent([2,5,5,2,3,5,1,2,4]))

