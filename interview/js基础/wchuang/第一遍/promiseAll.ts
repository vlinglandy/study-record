import { rejects } from "assert"


class MyPromiseAll{
    static handler: any[] = []
    static result: any[] = []
    static flag: number = 0
    static len: number 

    static all(arr: any[]){
        MyPromiseAll.len = arr.length
        return new Promise((resolve, reject) => {
            arr.forEach(res => {
                res.then((res: any) => {
                    MyPromiseAll.flag += 1
                    MyPromiseAll.result.push(res)
                    if(MyPromiseAll.flag == MyPromiseAll.len){
                        resolve(MyPromiseAll.result)
                    }
                })
            })
        })
    }
}
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 500);
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 500);
})
MyPromiseAll.all([p1,p2]).then((res: any) => {
    console.log(res);
})


/**
* 
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 500);
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 500);
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 500);
})
let p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 500);
})
Promise.all([p1,p2,p3,p4]).then(arr => {
    console.log(arr);
})
 */