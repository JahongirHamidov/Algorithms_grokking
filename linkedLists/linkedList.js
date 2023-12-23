// let obj1 = {a: true}
// let obj2 = obj1
// obj1.a = 'hello'
// delete obj1
// obj2 = 'another'

// console.log('1', obj1)
// console.log('2', obj2)

// Javascript has automatically runs garbage-collector


// MY linked list
// 10->5->16
// let newLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

class LinkedList{
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }
    append(value){
        //
    }

}

const myLinkedList = new LinkedList(10)
console.log(myLinkedList)
myLinkedList.append(5)
myLinkedList.append(16)