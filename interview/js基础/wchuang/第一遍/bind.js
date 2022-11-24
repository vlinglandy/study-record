Function.prototype.MyBind = function(context){
    if(typeof this !== 'function'){
        throw new TypeError("error")
    }
    let fn = this
    context = context || window
    return function (){
        return fn.apply(context, arguments)
    }
}