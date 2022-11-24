import {crea} from 'redux'

const reducer = function(preState, actions){
    let {type, data} = actions
    switch(type){
        case 'increment': return preState + data;break;
        case 'decrement': return preState - data; break;
        default :return preState
    }
}

export default 