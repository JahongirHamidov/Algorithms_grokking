// String ===> arrays of characters

// 'Hi My name is Andrei' should be:
// 'ierdnA si eman yM iH'

//Pure way
function reverse0(str){
    if(!str || str.length<2 || typeof str !== "string"){
        return 'hmm thats not good'
    }

    const backwards = []
    const totalItems = str.length - 1

    for(let i = totalItems; i>=0; i-- ){
        backwards.push(str[i])
    }
    console.log(backwards)
    return backwards.join("")
}

// with a build-in functions
function reverse2(str){
    return str.split('').reverse().join('')
}

// with ES-6
const reverse3 = (str) => str.split('').reverse().join('')


// with destructuring
const reverse4 = str => [...str].reverse().join('')

console.log(reverse4("Hello I am Jakhongir"))
