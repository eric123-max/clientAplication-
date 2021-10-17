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
//'http://localhost:3030/menu?date='+menuDate
    getData() {
        // const props= this.props
        const self = this
        const today = new Date().getDay()

        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

        console.log(axios.get('http://localhost:3030/dishes?date='+days[today]).then(function (response) {
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
        // console.log(this.state)

        return (
            <div className="DishesList">
                <Grid columns={5}>
                    <Grid.Row>
                    {
                        this.state.dishes.map(function (item) {
                            return (
                                <Grid.Column key={item._id}>
                                    <MenuItem name={item.name} date={item.date} id={item._id} picture={item.picture}/>
                                </Grid.Column>
                            )
                        })
                    }
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default DishesList