import React from 'react'
import { Input } from 'semantic-ui-react'
import { Icon, Divider, Container, Button } from 'semantic-ui-react'
class Login extends React.Component {

    render() {

        return (
            <div className="Login">
                <Container textAlign='center'>
                    <h1>Login/Create your account</h1>
                    <Divider />

                    <Icon name='user' size='massive' />
                    <Divider />

                    <Input icon='users' iconPosition='left' placeholder='Username' />
                    <Divider />

                    <Input icon='lock' iconPosition='left' placeholder='Password' />
                    <Divider />

                    <Button size='large' color='blue'>Login</Button>
                    <Button size='large' color='red'>Sign up</Button>

                </Container>

            </div>


        )
    }
}
export default Login