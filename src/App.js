import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import home from './page/home'
import tes from './page/tes'
import list from "./component/list"

class App extends Component{
  render(){
    return(
      <div>
        <Switch>
          <Route path="/" component={home} exact />
          <Route path="/tes" component={tes}/>
          <Route path="/list" component={list}/>
        </Switch>
      </div>
    )
  }
}

export default App;