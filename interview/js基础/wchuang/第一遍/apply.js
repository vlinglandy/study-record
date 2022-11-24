Function.prototype.MyApply = function (context, args){
    if(typeof this !== 'function'){
        throw new TypeError("error")
    }
    context = context || window
    context.fn = this
    let result= context.fn(...args)
    delete context.fn
    return result
}
