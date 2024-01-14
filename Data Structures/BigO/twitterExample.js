const array = ['first', 'second', 'third']

array[0] // O(1)
array[array.length-1]  // O(1)


//Find 1th , find nth ...
const array2 = [
    {
        tweet: 'hi',
        date: 2012
    },
    {
        tweet: 'my',
        year: 2015
    },
    {
        tweet: 'teddy',
        year: 2016
    }
]
//O(n^2) => storing this info into array (array2)




'hellosadoajsdoi'.length   // for Javascript O(1) because length in JS it's a property. It's built-in, it's located in the string object
// but in other languages len() function might be O(n), for example in python