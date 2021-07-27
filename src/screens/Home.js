import React from 'react'
import MenuItem from '../components/MenuItem'
import MenuList from '../components/MenuList'
import Navigation from '../components/Navigation'
import Carrousel from '../components/Carrousel'
import Item from '../MenuItemScreen/Item'
import { Header } from 'semantic-ui-react'

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <Header as='h1' textAlign="center">This is my App</Header>
                <Navigation />
                <Carrousel />
                <MenuItem name="Milk" date="2021-7-22" nutrition="dfghjk" id="0" />
                <MenuList />
                <Item />
            </div>
        )
    }


}
export default Home