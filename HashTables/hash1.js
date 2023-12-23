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
    _hash(key){
        let hash = 0
        for (let i=0;i<key.length;i++){
            hash = (hash + key.charCodeAt(i)*i)% this.data.length
        }
        return hash
    }
    set(key,value){
        const keyHashed = myHashTable._hash(key)
        this.data[keyHashed] = value
    }
    get(key){
        const keyHashed = myHashTable._hash(key)
        return this.data[keyHashed]
    }
}

const myHashTable = new HashTable(50)
// myHashTable.set('grapes', 10000)
// myHashTable.get('grapes')
console.log(myHashTable._hash('grapes'))