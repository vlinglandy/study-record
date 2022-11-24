function debounce(this: any,fn: any,n: number){
    let timer:any = null, context = this
    return function (){
        if(timer != null){
            clearTimeout(timer)
        }
        // 每次点击都重新设置一个定时器
        timer = setTimeout(() => {
            fn.apply(context,arguments)
        }, n * 1000);
    }
}

let func = debounce(() => {
    console.log("发送请求");
},2)

func()
setTimeout(func,0.5)
setTimeout(func,1.5)
setTimeout(func,2.5)