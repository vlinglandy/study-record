function PromiseRace(arr: any[]){
    return new Promise((resolve, reject) => {
        arr.forEach(p => {
            p.then((res: any) => {
                resolve(res)
            })
        })
    })
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
PromiseRace([p1,p2]).then(res => {
    console.log(res);
})