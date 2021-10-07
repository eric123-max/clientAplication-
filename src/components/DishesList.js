import React from 'react'
import axios from 'axios'
import MenuItem from './MenuItem'
import { Grid } from 'semantic-ui-react'

class DishesList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            dishes: []
        }
    }

    getData() {
        const self = this
        console.log(axios.get('http://localhost:3030/dishes').then(function (response) {
            console.log(response.data.data)
            self.setState({
                dishes: response.data.data
            })
        }))
    }

    componentDidMount() {
        this.getData()
    }

    render() {
        console.log(this.state)

        return (
            <div className="DishesList">
                <Grid doubling stackable columns={5}>
                    {
                        this.state.dishes.map(function (item) {
                            return (
                                <Grid.Column>
                                    <MenuItem name={item.name} date={item.date} id={item._id} picture={item.picture}/>
                                </Grid.Column>
                            )
                        })
                    }
                </Grid>
            </div>
        )
    }
}

export default DishesList