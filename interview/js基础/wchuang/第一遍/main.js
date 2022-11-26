// 节流

// 防抖

// 观察者模式

// 发布订阅
class EventEmiter{
    constructor(){
        this.center = {}
    }
    on(type, handler){
        console.log(this.center);
        this.center[type] = this.center[type] ?  this.center[type].push(handler) : [].push(handler)
        console.log(this.center);
    }

    emit(type){
        this.center[type].forEach(element => {
            element()
        });
    }
    off(type, handler){
        let idx = center[type].indexOf(handler)
        this.center[type].splice(idx,1)
    }
}
let emiter = new EventEmiter()
emiter.on("xxx",function (){
    console.log("xxx");
})
emiter.on("xxx",() => {
    console.log("xxx");
})
emiter.emit("xxx")
// 寄生组合

// instanceof

// call apply bind

// object.create

// new 

// 类型推断

// 函数科利华

// 深浅拷贝

// sleep

// reduce

// 数组扁平化，flat

