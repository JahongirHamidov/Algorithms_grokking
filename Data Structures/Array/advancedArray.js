// reference type
var object1 = {value: 10} //Box1 stored  in box1
var object2 = object1 //Box1 stored in box1
var object3 = {value:10} //Box2 stored in box2

//context 
function b(){
    let a = 4
    console.log(this)
}
const object4 = {
    a: function(){
        console.log(this)
    }
}
object4.a()

//instantiation
class Player{
    constructor(name, type){
        this.name = name,
        this.type = type
    }
    introduce(){
        console.log(this.name)
    }
}

const player = new Player("jahongir", 'ml engineer')
console.log(player.introduce())

class Wizard extends Player{
    constructor(name, type){
        super(name, type)
    }
    play(){
        console.log(`Hello I'm a ${this.type}`)
    }
}

wizard1 = new Wizard('Wizard', 'wizardType')
console.log(wizard1.play())