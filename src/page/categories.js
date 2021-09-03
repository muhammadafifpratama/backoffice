import React, { Component } from 'react';
import Table from "../component/table"
const header = ["header","header1","header2","header3","header4",]
class User extends Component {
    state = {  }
    
    renderkategori = () => {
        return header.map((val) => {
            return(
                <Table header={val} data="data s"></Table>
            )
        })
      }

    render() { 
        return ( 
        <div>
        <center>
            {this.renderkategori()}
        </center>
        </div> 
        );
    }
}
 
export default User;