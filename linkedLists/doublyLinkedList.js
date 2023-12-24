// Doubly Linked Lists
class DoublyLinkedList{
    constructor(value){
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head
        this.length = 1
    }
    append(value){
        const node = {
            value: value, 
            next: null,
            prev: null
        }
        node.prev = this.tail
        this.tail.next = node
        this.tail = node
        this.length++
        return this
    }
    //10->5->16 prepend(1) => 1->10->5->16
    prepend(value){
        const newNode = {
            value: value, 
            next: null,
            prev: null
        }
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
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
            next: null,
            prev: null
        }

        const leader = this.traverseToIndex(index-1)
        const follower = leader.next
        leader.next = newNode
        newNode.next = follower
        newNode.prev = leader
        follower.prev = newNode
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

}

const myLinkedList = new DoublyLinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.append(22)
myLinkedList.prepend(1)

console.log(myLinkedList.insert(3, 122))
console.log(myLinkedList.remove(3))
