Function.prototype.MyCall = function(context,...args){
    if(typeof this !== 'function'){
        throw new TypeError("ERROR")
    }
    context = context || window
    context.fn = this
    let result = context.fn(...args)
    delete context.fn
    return result
}

