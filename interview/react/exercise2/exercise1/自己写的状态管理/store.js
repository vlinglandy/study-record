import AppUI from './App'

import { connect } from 'react-redux'

export default connect(
    state => ({count: 1}),
    {
        add: function dispatchAdd(num){
            return {type:"increment",data:num}
        },
        sub: function dispatchSub(num){
            return {type:"decrement",data:num}
        }
    }
)(AppUI)