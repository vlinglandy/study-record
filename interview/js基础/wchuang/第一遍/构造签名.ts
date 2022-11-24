class P{}

interface F{
    new () : P
}

function fn(f: F){
    return new f()
}
fn(P)