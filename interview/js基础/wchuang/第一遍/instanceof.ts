function myInstanceOf(source: any, target:any){
    let proto = Object.getPrototypeOf(source)
    let prototype = target.prototype
    while(proto){
        if(proto == prototype ) return true
        proto = Object.getPrototypeOf(proto)
    }
    return false
}

console.log(myInstanceOf({},Object));
/**
 * 1. 首先代表一个对象类型信息都在原型上，可以通过getprototypeof方法获取对象的原型
 * 可以通过.prototype方法获取原型，当顺着对象的原型链找，每次都Object.getprototypeof(obj)
 * 如果找到和原型相等就返回true
 * 2. 本质的原型是很多东西的prototype创建之后就不会改变了
 */