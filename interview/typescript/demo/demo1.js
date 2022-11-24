"use strict";
// 类型
let str = "123";
let n = 123;
let f = true;
let nn = null;
let un = undefined;
let bi = BigInt(123123);
let s = Symbol("123");
let fu = "asd";
let o = {};
console.log(str);
console.log(n);
let stu = {
    name: "aaa",
    age: 12,
    grade: 88,
    eat: () => {
        console.log("eat");
    }
};
// 函数
let fn = function () { console.log("function"); };
fn();
let nfn = (a, b) => {
    return a + b;
};
// 泛型
function calc(a, b) {
    console.log(a, b);
}
calc(1, 3);
