import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import home from './page/home'
import tes from './page/tes'
import list from "./component/list"
import navbar from "./component/navbar"
import sidebar from "./component/drawer"
import table from "./component/table"
import cat from "./page/categories"
import voucher from "./page/voucher"
import product from "./page/product"
import login from "./page/login"
import notfound from "./page/notfound"

class App extends Component{
  render(){
    return(
      <div>
        <Switch>
          <Route path="/" component={home} exact />
          <Route path="/tes" component={tes}/>
          <Route path="/list" component={list}/>
          <Route path="/nav" component={navbar}/>
          <Route path="/bar" component={sidebar}/>
          <Route path="/cat" component={cat}/>
          <Route path="/product" component={product}/>
          <Route path="/voucher" component={voucher}/>
          <Route path="/table" component={table}/> 
          <Route path="/login" component={login}/> 
          <Route path="*" component={notfound}/> 
        </Switch>
      </div>
    )
  }
}

export default App;