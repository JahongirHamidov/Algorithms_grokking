const nemo = [1, 12,'nemo']

function findNemo(array){
    let t0 = performance.now()
    for (let i=0; i< 100000000; i++){
        if(array[i] == 'nemo'){
            console.log('found nemo')
        }
    }
    let t1 = performance.now()
    console.log(`Execution time = ${t1-t0} ms`)
}
findNemo(nemo)