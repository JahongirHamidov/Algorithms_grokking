// let user = {
//     age: 54,
//     name: "Kylie",
//     magic: true,
//     scream: function () {
//         console.log("Scream")
//     }
// }

// user.spell = "Hello"  O(1)

// console.log(user)
// user.scream()

// const a = new Map()
// const b = new Set()

class HashTable{
    constructor(size){
        this.data = new Array(size)
    }
    _hash(key){  // _ is a common standard that you can access this method outside the class
        let hash = 0
        for (let i=0;i<key.length;i++){
            hash = (hash + key.charCodeAt(i)*i)% this.data.length
        }
        return hash
    }  // O(1)
    set(key,value){
        const keyHashed = myHashTable._hash(key)
        if(!this.data[keyHashed]){   //if there's no data at that index create an empty linked list
            this.data[keyHashed] = []
        } 
        this.data[keyHashed].push([key, value])
        return this.data
    }  // O(1)
    get(key){
        const keyHashed = myHashTable._hash(key)
        const currentBucket =  this.data[keyHashed]
        // console.log(currentBucket)
        if (currentBucket){
            for ( let i = 0; i< currentBucket.length; i++){
                if(currentBucket[i][0] === key){
                    return currentBucket[i][1]
                }
            }
        }
        return undefined
    }  // O(n)=>worst possible way// O(1) => best way

    keys(){
        const keysArray = []
        for (let i=0; i<this.data.length; i++){
            if(this.data[i]){
                keysArray.push(this.data[i][0][0])
            }
        }
        return keysArray
    }

}

const myHashTable = new HashTable(50)

myHashTable.set('another', 10000)
myHashTable.set('apples', 45)
myHashTable.set('oranges', 2)


// myHashTable.get('another')
// console.log(myHashTable.get('another'))
console.log(myHashTable.keys())
