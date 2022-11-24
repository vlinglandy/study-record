
enum Status{
    PENDING = "PENDING",
    FULFILL = 'FULFILL',
    REJECT = 'REJECT'
}

class MyPromise{
    status: Status = Status.PENDING
    value?: any 
    resolveHandler:any[] = []
    rejectHandler:any[] = []
    resolve: (value?: any) => void = (res) => {
        // 防止resolve之后还有reject所以要判断状态
        if (this.status != Status.PENDING) return
        this.value = res
        this.status = Status.FULFILL
        this.resolveHandler.forEach(fn => {
            process.nextTick(fn)
        });
    }
    reject: (value?: any) => void = (res) => {
        if (this.status != Status.PENDING) return
        this.value = res
        this.status = Status.REJECT
        this.rejectHandler.forEach(fn => {
            process.nextTick(fn)
        })
    }
    constructor(exector:(resolve?: any,reject?: any) => void){
        try{
            exector(this.resolve.bind(this), this.reject.bind(this))
        }catch(err){
            console.log(err);
            this.reject(err)
        }
    }
    then(onFulfill?: any, onReject?: any){
        let self = this
        return new MyPromise((resolve, reject) => {
            let fulfilled = () => {
                let result = onFulfill(self.value)
                return result instanceof MyPromise ? result.then(resolve, reject) : resolve(self.value)
            }
            let rejected = () =>{
                let result = onReject(self.value)
                return result instanceof MyPromise ? result.then(resolve, reject) : reject(self.value)
            }
            let stauts = self.status
            switch(stauts){
                case Status.PENDING:
                    self.resolveHandler.push(fulfilled)
                    self.rejectHandler.push(rejected)
                    break
                case Status.FULFILL:
                    fulfilled()
                    break
                case Status.REJECT:
                    rejected()
                    break
            }
        })
    }
}


new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    },500)
    setTimeout(() => {
        reject("出错了")
    },500)
}).then((res: any) => {
    console.log(res);
    return res
},(err: any) => {
    console.log(err);
}).then((res: any) => {
    console.log(res);
})






/**
 * enum Status{
    PENDING = "pending",
    FULFILL = 'fulfilled',
    REJECT = 'reject'
}

class MyPromise{
    state: Status = Status.PENDING
    value: any
    resolve: any = (res?: any) => {
        this.value = res
        this.state = Status.FULFILL
    }
    reject: any = (res?: any) => {
        this.value = res
        this.state = Status.REJECT
    }
    constructor(execution: (resolve:any, reject:any) => void){
        try{
            execution(this.resolve, this.reject)
        }catch(error){
            console.log(error);
            this.reject()
        }
    }
    then(callback: Function){
        callback(this.value)
    }
}

new MyPromise((resolve, reject) => {
    // setTimeout(resolve ,0)
    resolve(1)
}).then((res?: any) => {
    console.log(res);
})
 */