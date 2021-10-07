import React from 'react'
import DishesList from '../components/DishesList'
import Carrousel from '../components/Carrousel'
import { Header } from 'semantic-ui-react'

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <Header as='h1' textAlign="center">This is my App</Header>
                <Carrousel />
                <h1>Today's meal</h1>
                <DishesList />
            </div>
        )
    }


}
export default Home
