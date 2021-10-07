import React from 'react'
import axios from 'axios'
import StandardMenu from './StandardMenu'
import { Grid } from 'semantic-ui-react'


class MenuList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            menu: {}
        }
    }



    getData() {
        const props= this.props
        const menuDate = props.match.params.date
        const self = this
        console.log(axios.get('http://localhost:3030/menu?date='+menuDate).then(function (response) {

            // console.log(response.data.data[0])

            self.setState({
                menu: response.data.data[0]

            })
        
        })
        )
    }
 
    componentDidMount() {
        this.getData()
    }

    render() {
        //  const props= this.props
        //  const menuId = props.match.params.id
        //   console.log("1234567",props.match.params)
        var content = null

        if (this.state.menu._id === undefined){
            content = <h1>no menu found</h1>
        }else {
            content = <StandardMenu date ={this.state.menu.date} bname = {this.state.menu.breakfast} lname = {this.state.menu.lunch} dname = {this.state.menu.dinner} sname = {this.state.menu.snack}/>
        }
// standard menu needs:
//1. bname this props is an array of objects and 
        
// = this.state.menu.breakfast.map(function (item) {
//     return (
//         <Grid.Column>
//             <StandardMenu bname = {item.name} bpicture = {item.picture}/>
//         </Grid.Column>
//     )
// })





        // console.log(this.state)
        // console.log(this.state.menu._id)
        

        return (
            <div className="MenuList">
                 <Grid doubling stackable columns={1}>
                     {
                         content 
                     }
                </Grid>
 
            </div>

        )

        
    }

}
export default MenuList




          