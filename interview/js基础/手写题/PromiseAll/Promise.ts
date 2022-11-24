enum Status{
    PENDING = 'pending',
    FULFILLED = 'fulfilled',
    REJECT = 'reject'
}

class MyPromise{
    private status: Status = Status.PENDING
    private value: any 

    private resolve:any = (value?: any) => { 
        this.status = Status.FULFILLED
        this.value = value
     }
    private reject:any = (value?: any) => { 
        this.status = Status.REJECT
        this.value = value
     }

    constructor(callBack: (resolve: any, reject: any) => void){
        callBack(this.resolve, this.reject)
    }

    then(callBack: (res?:any) => void){
        callBack(this.value)
    }
}

new MyPromise((resolve, reject) => {
    resolve(3)
}).then(res => {
    console.log(res);
})