class Node{
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null   
    }
}

class BinarySearchTree{
    constructor() {
        this.root = null
    }
    insert(value){
        const newNode = new Node(value)
        if (!this.root){
            this.root = newNode
        } else {
            let currentNode = this.root
            while(true){
                if(value<currentNode.value){
                    // Left
                    if(!currentNode.left){
                        currentNode.left = newNode
                        return this
                    }
                    currentNode = currentNode.left
                } else {
                    // Right
                    if(!currentNode.right){
                        currentNode.right = newNode
                        return this
                    }
                    currentNode = currentNode.right
                }
            }
        }
    }

    lookup(value){
        if(!this.root){
            return false
        }
        let currentNode = this.root
        while(currentNode){
            if (value<currentNode.value){
                currentNode = currentNode.left
            } else if(value>currentNode.value){
                currentNode = currentNode.right
            } else if (value === currentNode.value){
                return currentNode
            }
        }
        return false
    }

    remove(value){
        if(!this.root){
            return false
        }
        let currentNode = this.root
        let parentNode = null
        while(currentNode){
            if(value<currentNode.value){
                parentNode = currentNode
                currentNode = currentNode.left
            } else if (value>currentNode.value){
                parentNode = currentNode
                currentNode = currentNode.right
            } else if(currentNode.value === value){
                // We have a match, get to work

                // Option 1: No right child:
                if(currentNode.right === null){
                    if (parentNode === null){
                        this.root === currentNode.left
                    } else {
                        //if parent>current value, make current left child a child of parent
                        if(currentNode.value<parentNode.value){
                            parentNode.left = currentNode.left

                            // if parent<current value, make left child a right child of parent
                        } else if(currentNode.value> parentNode.value){
                            parentNode.right = currentNode.left
                        }

                    }
                    //Option 2: right child which doesn't have a left child
                } else if(currentNode.right.left === null){
                    if(parentNode === null){
                        this.root = currentNode.left
                    } else {
                        currentNode.right.left = currentNode.left
                        //if parent>current, make right child of the left the parent 
                        if(currentNode.value<parentNode.value){
                            parentNode.left = currentNode.right

                        // if parent<current, make right child a right child of the parent
                        } else if(currentNode.value>parentNode.value){
                            parentNode.right = currentNode.right
                        }
                    }
                    // Option 3: Right child that has a left child
                } else {

                    // find the right child's left most child
                    let leftMost = currentNode.right.left
                    let leftmostParent = currentNode.right
                    while(leftMost.left !== null){
                        leftmostParent = leftMost
                        leftMost = leftMost.left
                    }

                    // parent's left subtree is now leftmost's right subtree
                    leftmostParent.left = leftMost.right
                    leftMost.left = currentNode.left
                    leftMost.right = currentNode.right


                    if(parentNode === null){
                        this.root = leftMost
                    } else {
                        if(currentNode.value<parentNode.value){
                            parentNode.left = leftMost
                        } else if (currentNode.value>parentNode.value){
                            parentNode.right = leftMost
                        }

                    }
                }
                return true
            }
        }
    }
}

const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(1)
tree.insert(20)
tree.insert(15)
tree.insert(170)
console.log(tree.lookup(9))

console.log(JSON.stringify(traverse(tree.root)))


function traverse(node){
    const tree = {value: node.value}
    tree.left = node.left === null ? null :
    traverse(node.left)
    tree.right = node.right === null ? null :
    traverse(node.right)
    return tree
}