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

    return (
      <Router>
        <Menu>
          <Menu.Item header
            as={Link}
            to="/"
          >
            The dishes</Menu.Item>
          <Menu.Item
            name='Item Details'
            as={Link}
            to="/item"

          />
          <Menu.Item
            name='Menu'
            as={Link}
            to="/menu"
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


          <Route path='/' exact>
            <Home />
          </Route>

          <Route path='/item/:id' component={ItemPage}>
          </Route>

          <Route path='/menu/:date' component={MenuList}>
          </Route>

        </Switch>
      </Router>
    )
  }
}
