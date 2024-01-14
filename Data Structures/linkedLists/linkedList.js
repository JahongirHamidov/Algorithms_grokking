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

    printList(){
        const array = []
        let currentNode = this.head
        while (currentNode !== null){
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array
    }

    insert(index, value){
        if (index >= this.length){
            return this.append(value)    
        }
        let newNode = {
            value: value,
            next: null
        }

        const leader = this.traverseToIndex(index-1)
        const holdingPointer = leader.next
        leader.next = newNode
        newNode.next = holdingPointer
        this.length++
        return this.printList()
    }  // O(n)
    traverseToIndex(index){
        let counter = 0
        let currentNode = this.head
        while(counter != index){
            currentNode = currentNode.next
            counter++
        }
        return currentNode
    }

    remove(index){
        const leader = this.traverseToIndex(index-1)
        const shouldBeDeleted = leader.next
        leader.next = shouldBeDeleted.next
        this.length--
        return this.printList()
    }
    // [1,10,5,16,22] => [22,16,5,10,1] MY solution:
    // reverse(){
    //     const array = myLinkedList.printList()
    //     const myList = new LinkedList(array[array.length-1])
    //     for (let i = array.length-2; i>=0; i--){
    //         myList.append(array[i])
    //     }
    //     return myList
    // }
    // Course solution:
    reverse(){
        if (! this.head.next){
            return this.head
        }
        let first = this.head
        this.tail = this.head
        let second = first.next
        while(second){
            const temp = second.next
            second.next = first
            first = second
            second = temp
        }
        this.head.next = null
        this.head = first
        return this
    }

}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.append(22)
myLinkedList.prepend(1)

console.log(myLinkedList.insert(3, 122))
console.log(myLinkedList.remove(3))
console.log(myLinkedList.reverse())