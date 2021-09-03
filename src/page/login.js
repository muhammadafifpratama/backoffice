import React, { Component } from "react"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Redirect } from "react-router-dom";
import Axios from "axios"
import {url} from "../helper/API_URL"

class Loginpage extends Component {
    state = {redirect: false}

    loginUser = () => {
        let username = this.username.value
        let password = this.password.value
        console.log(username)
        console.log(password)
        if (username === '' || password === '') {
            alert('Fill in all the forms')
        } else {
            Axios.post(url + "login/", {
                username,
                password
            })
                .catch((err) => {
                    alert(err.response.status + err.response.statusText);
                })
                .then((res) => {
                    if (res === undefined) {
                        console.log('no response');
                    }
                    else {
                        console.log(res.data.token);
                        localStorage.setItem('token', res.data.token)
                        this.setState({ redirect: true });
                    }
                })
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
        // console.log(res.data);
        return (
            <div style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
                <Box width={800} height={300} bgcolor="grey.300" p={1} my={0.5}>
                    <div style={{
                        position: 'absolute', left: '50%', top: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}>
                        <TextField id="standard-basic" label="Username" inputRef={(username) => this.username = username} > </TextField>
                        <br></br>
                        <TextField id="standard-password-input" label="Password" type="password" inputRef={(password) => this.password = password}> </TextField>
                        <br></br>
                        <Button variant="contained" color="secondary" style={{ minWidth: '185px' }} onClick={this.loginUser}>Login</Button>
                        <br></br><br></br>
                    </div>
                </Box >
            </ div >
        )
    }
}
export default Loginpage;