function throttle(this: any, fn: any, delay: any){
    let begin = Date.now()
    let context: any = this
    return function (this: any,...args: any){
        let time = Date.now()
        if(time - begin >  delay){
            begin = time
            fn.apply(context,arguments)
        }
    }
}
/**
 * 如果不限制上下文的话，在对象上面调用节流和直接用节流会改变this指向，所以要绑定好context，同时
 */
// console.log(this);
let fun = throttle((content: any) => {
    console.log(content);
},100)
setTimeout(() => fun("150"), 150);
setTimeout(() => fun("160"), 160);
setTimeout(() => fun("200"), 200);
setTimeout(() => fun("300"), 300);
/**
 * 防抖就一个，控制防抖防止多次执行
 * 节流是多次执行，但是限制时间
 */