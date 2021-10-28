import React from 'react'
import client from '../client'

// import Login from './Login'
// import axios from 'axios'
import { Icon, Form, Button, Divider, Container } from 'semantic-ui-react'
// Authenticate with the local email/password strategy 
// app.authenticate({
//     strategy: 'local',
//     email: 'my@email.com',
//     password: 'my-password'
//   }).then(() => {
//     // Logged in
//   }).catch(e => {
//     // Show login page (potentially with `e.message`)
//     console.error('Authentication error', e);
//   });


//how can users get their token?
class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
        this.handleLogin = this.handleLogin.bind(this)
        this.handleSignup = this.handleSignup.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
    }


    handleEmail(ev) {
        var value = ev.target.value
        console.log(value)
        this.setState({ email: value })
    }

    handlePassword(ev) {
        var value = ev.target.value
        console.log(value)
        this.setState({ password: value })
    }

    handleLogin() {

        client.authenticate({
            "email": this.state.email,
            "password": this.state.password,
            "strategy": "local"
        }).then((r) => {
            // Logged in
            console.log('authentication attempt', r)
            console.log('Login successful, you should refresh the page!')

        })

        // const self = this
        // axios.post('http://localhost:3030/authentication',{
        //     strategy: "local",
        //     email: this.state.email,
        //     password: this.state.password
        // }).then(function (response) {
        //     console.log(response.data)
        //     // self.resetForm()

        // })

        // axios.get('http://localhost:3030/authentication').then(function (response) {
        //     self.setState({
        //         // token: response.data.accessToken
        //     })
        // })


    }
    handleSignup(){
        const signupService = client.service('users')
        console.log(signupService)
        signupService.create({
            "email": this.state.email,
            "password": this.state.password,
            "strategy": "local"
        })
            .then(function (r) { console.log(r) })

    }

        


    render() {
        console.log(2642, this.state)
        return (
            <div className="LoginForm">
                <Container textAlign='center'>
                    <h1>Login/Create your account</h1>
                    <Divider />
                    <Icon name='user' size='massive' />
                    <Divider />
                    <Form>
                        <Form.Field>
                            <label>Username(email)</label>
                            <input icon='users' iconPosition='left' value={this.state.email} onChange={this.handleEmail} placeholder='email' />
                            <Divider />

                            <label>Password</label>
                            <input icon='lock' iconPosition='left' value={this.state.password} onChange={this.handlePassword} placeholder='password' />

                        </Form.Field>
                        <Button size='large' color='blue' onClick={this.handleLogin}>Login</Button>
                        <Button size='large' color='red' onClick={this.handleSignup}>Sign up</Button>

                    </Form>
                </Container>
            </div>

        )
    }
}

export default LoginForm