require("./pimpMyArray.js").pimpMyArray()

//CONSTRUCTOR METHODS

//TABULATE
var a1 = Array.tabulate(10, i=>i*i)
console.log(a1)                         //[ 0, 1, 4, 9, 16, 25, 36, 49, 64, 81 ]

//ITERATE
var a2 = Array.iterate(1,10,i=>2*i)
console.log(a2)                         //[ 1, 2, 4, 8, 16, 32, 64, 128, 256, 512 ]

//ITERATEUNTIL
var a3 = Array.iterateUntil(1,i=>i<1025,i=>2*i)
console.log(a3)                         //[ 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024 ]

//RANGE
var a4 = Array.range(0,10)
console.log(a4)                         //[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

//FILL
var a5 = Array.fill(10, ()=>Math.floor(Math.random()*100+1))
console.log(a5)                         //10 random values between 1 and 100

//INSTANCE METHODS

//GROUPBY
var a6 = "hi how are you?".split(" ").groupBy(s=>s[0])
console.log(a6)                         //Map { 'h' => [ 'hi', 'how' ], 'a' => [ 'are' ], 'y' => [ 'you?' ] }
var a7  = Array.range(0,10).groupBy(i=>i%3)
console.log(a7)                         //Map { 0 => [ 0, 3, 6, 9 ], 1 => [ 1, 4, 7 ], 2 => [ 2, 5, 8 ] }             

//REMOVE
var a8  = ["hi", "how", "are", "you"].remove(2)
console.log(a8)                         //[ 'hi', 'how', 'you' ]

//PARTITION
var a9 = ["hi", "how", "are", "you"].partition(s=>s.length==2)
console.log(a9)                         //[ [ 'hi' ], [ 'how', 'are', 'you' ] ]

var a10 = Array.range(3,8).skip(2)
console.log(a10)                        //[ 5, 6, 7 ]

var a11 = Array.range(3,8).take(2)
console.log(a11)                        //[ 3, 4 ]