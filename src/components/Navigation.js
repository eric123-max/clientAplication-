import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../screens/Home'
import ItemPage from '../screens/ItemPage'
import MenuList from './MenuList';

export default class Navigation extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    var today = new Date()
    var day = today.getDay()

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    
    return (
      <Router>
        <Menu id = "color">
          <Menu.Item header id="text"
            as={Link}
            to={"/"}
          >
            The dishes</Menu.Item>
          <Menu.Item id="text"
            name='Item Details'
            as={Link}
            to="/item"


          />
          <Menu.Item id="text"
            name='Menu'
            as={Link}
            to={"/menu/"+days[day]}
          />

          {/* <Menu.Item
            name='Lunch'
            active={activeItem === 'Lunch'}
          //onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Dinner'
            active={activeItem === 'Dinner'}
          //onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Midnight snack'
            active={activeItem === 'Midnight snack'}
          //onClick={this.handleItemClick}
          /> */}

          <Menu.Item position='right'>
            <Input action={{ icon: 'search' }} placeholder='Search...' />
          </Menu.Item>
        </Menu>

        <Switch>


          <Route path='/'exact>
            <Home />
          </Route>

          <Route path='/item/:id' component={ItemPage}>
          </Route>

          <Route path='/menu/:date' component={MenuList}>

          {/* <Route path='/menu/' component={MenuList}> */}
          </Route>

        </Switch>
      </Router>
    )
  }
}
