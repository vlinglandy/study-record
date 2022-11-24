function Person() {}
let p = new Person()
// p是引用类型
let fn = function (){}
// fn也是引用类型
console.log(typeof fn);// function
console.log(typeof p);// object