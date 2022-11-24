let pp = new Promise((resolve) => {
    setTimeout(() => resolve("p"),500)
})
let p1 = new Promise((resolve) => {
    setTimeout(() => resolve("p1"),500)
})
let p2 = new Promise((resolve) => {
    setTimeout(() => resolve("p2"),500)
})
let p3 = new Promise((resolve) => {
    setTimeout(() => resolve("p3"),500)
})

Promise.all([pp,p1,p2,p3]).then(res => {
    res.forEach(x => {
        console.log(x);
    })
})