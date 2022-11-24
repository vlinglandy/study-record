


function newOperator(fun: any,argu: any){
    let constructor = Array.prototype.shift.call(arguments)
    let o = Object.create(constructor.prototype)
    return constructor.apply(o,arguments)
}

console.log(newOperator(Array,1));
console.log(Array(1));

// console.log(new Array(1));
