function judgeType(obj: any){
    if(typeof obj !== 'object')return typeof obj
    return Object.prototype.toString.call(obj).split(" ")[1]
}

console.log(judgeType([]));
console.log(judgeType({}));
console.log(judgeType(""));
console.log(judgeType(1));
console.log(judgeType(null));
