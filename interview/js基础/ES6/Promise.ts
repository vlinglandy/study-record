/**
 * 回调地狱演示
 */

function getData(callBack: Function){
    setTimeout(() => {
        callBack("info")
    },50)
}
getData((res: string) => {
    console.log(res);
    getData((res: string) => {
        console.log(res)
        getData((res: string) => {
            console.log(res);
        })
    })
})
