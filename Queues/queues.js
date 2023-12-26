// Queues
class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}
// with Arrays

// With linked lists
class Queues{
    constructor(){
        this.first = null
        this.last = null
        this.length = 0
    }

    peek(){
        return this.first
    }
    enqueue(value){
        const newNode = new Node(value)
        if(this.length === 0) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        this.length++
        return this
    }
    dequeue(){
        if(!this.first) {
            return null
        }
        if (this.first === this.last){
            this.last = null
        } 
        this.first = this.first.next
        this.length--
        return this
    }
}
const myQueue = new Queues()
myQueue.enqueue('1')
myQueue.enqueue('2')
myQueue.enqueue('3')
myQueue.enqueue('4')
console.log(myQueue)