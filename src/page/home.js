import React, { Component } from 'react';
import Axios from 'axios'
import Tes from "../component/list"

class Home extends Component {
    state = { data:[] }
    async componentDidMount(){
      const product = await Axios.get("https://api.temandapur.com/api/v1/categories/")
      //console.log(product.data.data.product_service);
      this.setState({data: product.data.data.product_service})
    }

renderproduk = () => {
            return (
                <Tes></Tes>
            )
    }

    render() { 
        console.log(this.state.data);
        return ( 
            <div>
                ini Home
                {this.renderproduk()}
            </div>
         );
    }
}
 
export default Home;