import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import home from './page/home'
import tes from './page/tes'
import list from "./component/list"
import navbar from "./component/navbar"
import sidebar from "./component/drawer"
import listing from "./component/productlisting"
import table from "./component/table"
import user from "./page/user"
import voucher from "./page/voucher"
import product from "./page/product"

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
          <Route path="/user" component={user}/>
          <Route path="/product" component={product}/>
          <Route path="/voucher" component={voucher}/>
          <Route path="/listing" component={listing}/>
          <Route path="/table" component={table}/>
        </Switch>
      </div>
    )
  }
}

export default App;