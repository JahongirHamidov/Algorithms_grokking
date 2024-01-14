class MyArray{
    constructor(){
        this.length = 0
        this.data = {}
    }

    get(index){
        return this.data[index]
    }

    push(item){
        this.data[this.length] = item
        this.length++
    }
    pop(){
        const lastItem = this.data[this.length-1]
        delete this.data[this.length-1]
        this.length--
    }
    delete(index){
        const lastItem = this.data[this.length-1]
        const item = this.data[index]
        this.shiftItems(index)
        return lastItem
    }
    shiftItems(index){
        for(let i=index; i<this.length-1; i++ ){
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length-1]
        this.length--
    }
}


const newArray = new MyArray()
newArray.push('hi')
newArray.push("hello")
newArray.push("you")
newArray.delete(1)

console.log(newArray)