// 类型
let str: string = "123"
let n: number = 123
let f: boolean = true
let nn: null = null
let un: undefined = undefined
let bi: bigint = BigInt(123123)
let s: symbol = Symbol("123")
let fu: number | string = "asd"

let o: object = {}

console.log(str);
console.log(n);

// 接口

interface Person {
    name: string,
    age: number
}

interface Student extends Person {
    grade: number
    [xxx:string]:any
}

let stu: Student = {
    name: "aaa",
    age: 12,
    grade: 88,
    eat: () => {
        console.log("eat");
    }
}

// 函数

let fn: Function = function (){console.log("function")};
fn()

type t = ((aa: number,bb: number) => number)

let nfn: t = (a: number,b: number) => {
    return a + b
}

// 泛型

function calc<T>(a: T,b: T):void{
    console.log(a,b);
}

calc<number>(1,3)