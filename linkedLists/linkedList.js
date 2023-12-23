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

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}


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
        const node = new Node(value)
        this.tail.next = node
        this.tail = node
        this.length++
        return this
    }
    //10->5->16 prepend(1) => 1->10->5->16
    prepend(value){
        this.head = {
            value: value, 
            next: this.head
        }
        this.length++
        return this
    }

    insert(value){

    }

}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.append(22)
console.log(myLinkedList.prepend(1))