// BigO rule N1:
// Worst case

const nemo = ['nemo']
const everyone = [1, 2, 3, 'nemo', 5, 6, 7, 8, 9, 0]

function findNemo(array){
    let t0 = performance.now()
    for (let i=0; i < everyone.length; i++){
        console.log('running!')
        if(array[i] == 'nemo'){
            console.log('found nemo')
            break
        }
    }
    let t1 = performance.now()
    console.log(`Execution time = ${t1-t0} ms`)
}
findNemo(everyone)

// Array runs everyone.length times unless we put break inside the if statement