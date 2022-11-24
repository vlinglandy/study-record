import React from "react";
import {Link,Route} from 'react-router-dom'
import Page1 from "./Page1";
import Page2 from './Page2'
export default class App extends React.Component{
    render(){
        return (
            <div>
                <Link to="/page1">Page1</Link>
                <Link to="/page2">Page2</Link>
                <Route path="/page1" component={Page1}></Route>
                <Route path="/page2" component={Page2}></Route>
            </div>
        )
    }
}