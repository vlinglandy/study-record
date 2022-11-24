let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("resolve")
    }, 500);
})
p.then(
    res =>{
        console.log(res);
    },
    err => {
        console.log(err);   
    }
)