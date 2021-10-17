import React from 'react'
import DishesList from '../components/DishesList'
import Carrousel from '../components/Carrousel'
import { Header } from 'semantic-ui-react'
import Footer from '../components/Footer'




class Home extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         dishes: []
    //     }
    // }

    // getData() {
    //     const self = this
    //     console.log(axios.get('http://localhost:3030/dishes').then(function (response) {
    //         console.log(response.data.data)
    //         self.setState({
    //             dishes: response.data.data
    //         })
    //     }))
    // }

    // componentDidMount() {
    //     this.getData()
    // }


    render() {


        return (
            <div className="Home">
                <div className="Orange">
                    <Header as='h1' textAlign="center">This is my App</Header>
                    <Carrousel />
                    <h1>Today's meal</h1>
                    <DishesList />
                </div>                    
                <Footer />

            </div>
        )
    }



}
export default Home
