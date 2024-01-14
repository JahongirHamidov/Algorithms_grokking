//Edge list
const graph = [[0,2], [2,3], [2,1], [1,3]]

// Adjacency list
const graphAdjL = [[2], [2,3], [0,1,3], [1,2]]

// Adjacent matrix

// in form of array:
const graphAdjMA = [
    [0,0,1,0],
    [0,0,1,1],
    [1,1,0,1],
    [0,1,1,0]
]

// in form of object:
const graphAdjMO = {
    0: [0,0,1,0],
    1: [0,0,1,1],
    2: [1,1,0,1],
    3: [0,1,1,0]
}