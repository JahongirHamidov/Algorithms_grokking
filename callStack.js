// Call stack
function foo (){
    foo()
}
foo()

console.log('1')
setTimeout(() => {
    console.log('2')
}, 2000);
console.log('3')


//Call stack

//Web api

callback()
//Callback queue

//Event loop