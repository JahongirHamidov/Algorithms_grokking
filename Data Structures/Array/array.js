const strings = ['a', 'b', 'c', 'd']
// 4*4 = 16 bytes of storage

strings[2]  //  => O(1)

// push
strings.push('e')
console.log(strings)  // ['a', 'b', 'c', 'd', 'e]   =>   O(n) => orqa fonda yangi array yaratib eski va yangi qiymatlarni qo'shib chiqadi 

// pop
strings.pop()
console.log(strings)  // ['a', 'b', 'c', 'd']    => O(1)

// unshift()
strings.unshift('x')
console.log(strings)  // [ 'x', 'a', 'b', 'c', 'd' ]  => O(n)

// splice()
strings.splice(2, 0, 'alien')
console.log(strings)  // [ 'x', 'a', 'alien', 'b', 'c', 'd' ]  => O(n)


// C++ static array:
// int a[20];
// int b[5] {1,2,3,4,5}