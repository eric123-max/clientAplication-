import React from 'react'
import MenuList from '../components/MenuList'
import Carrousel from '../components/Carrousel'
import { Header } from 'semantic-ui-react'

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <Header as='h1' textAlign="center">This is my App</Header>
                <Carrousel />
                <h1>Menu</h1>
                <MenuList />
            </div>
        )
    }


}
export default Home