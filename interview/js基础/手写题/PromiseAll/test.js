class Test {
    constructor( fn ){
        fn(() => console.log("fn"), () => console.log("gn"))
    }
}

new Test((f,g)=>{
    if(false){
        f()
    }else{
        g()
    }
})
/**
 * 传入一个函数，这个函数会接收两个函数，并且根据传入的逻辑调用自身
 * 对应promise来说就是promise提前封装好了正确和错误的逻辑，之后我们想要调用它
 * 正确和错误的逻辑，就可以传入一个参数是函数的函数，这个函数接受提前定义好的逻辑
 * 处理then和catch状态
 */