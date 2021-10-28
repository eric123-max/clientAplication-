import React from 'react'
import Footer from '../components/Footer'
import LoginForm from '../components/LoginForm'

class LoginPage extends React.Component {
    render() {
        return (

            <div className="LoginPage">

                <LoginForm />
                <Footer/>


            </div>

        )
    }


}
export default LoginPage
