import React from 'react';
import findDOMNode from 'react-dom';
import { Button, ControlLabel, Form, FormControl, FormGroup, Image } from 'react-bootstrap';
import axios from 'axios'
import set from 'lodash/set'

class LoginPage extends React.Component {
    constructor(props){
        super(props)
        this.state={
            email: '',
            password: '',
            loading: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleSubmit(e) {
        e.preventDefault()
        const logo = document.getElementById("logo")
        this.setState({loading: true, errorMessage: ""})
        const { email, password} = this.state
        const data = {email, password}
        axios.post('http://localhost:3000/api/login', {
            "email": email, 
            "password": password,
        })
        .then(res => {
            this.setState({loading: false})
            alert("Login Success")
        })
        .catch(err => {
            this.setState({errorMessage: err.message})
            this.setState({loading: false})
        })
        
        

    }
    handleChange(e){
        e.preventDefault()
        const { name, value } = e.target
        const result = set(this.state, name, value)
        this.setState(result)
    }

    render() {
        const {errorMessage} = this.state;
        const wellStyles ={maxWidth: 800, margin: '1rem auto 0', backgroundColor: 'white'};
        const loading = this.state.loading ? 'logo-spin': '';
        return (
            <div className="well" style={wellStyles}> 
                <Image className={loading} src="https://cdn.worldvectorlogo.com/logos/react.svg" thumbnail responsive />
                <Form >
                    <FormGroup controlId="formHorizontalEmail" >
                        <ControlLabel>Email address </ControlLabel>
                        <FormControl name="email" style={{borderRadius: '1rem'}} type="username" ref="username" onChange={this.handleChange} placeholder="Example@appman.co.th" />
                    </FormGroup>
                    <FormGroup controlId="formHorizontalPassword">
                        <ControlLabel>Password </ControlLabel>
                        <FormControl name="password" style={{borderRadius: '1rem'}} type="password" ref="password" onChange={this.handleChange} placeholder="Password" />
                    </FormGroup>
                    {errorMessage &&
                    <p style={{color:'red'}}>{errorMessage}</p>
                    }
                    <Button bsSize="large" style={{backgroundColor: 'deepskyblue', color:'white', borderRadius: '5px'}} onClick={(event) => this.handleSubmit(event)}>Login</Button>
                    
                </Form>
            </div>
        );
    }
}

export default LoginPage;
