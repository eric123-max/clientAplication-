import React from 'react'
import Item from '../components/itemComponents/Item'
import Ingredients from '../components/itemComponents/Ingredients'
import CommentList from '../components/CommentList'
import { Container, Divider } from 'semantic-ui-react'
import AddComment from '../components/AddComment'
import axios from 'axios'


class ItemPage extends React.Component {
    constructor(props){
        super(props )
        this.state={
            item: {}
        }
    }

    getData() {
        const props= this.props
        const dishId = props.match.params.id
        const self = this
        console.log(axios.get('http://localhost:3030/dishes/'+dishId).then(function (response) {
            // console.log(response.data.data)

            self.setState({
                item: response.data

            })
        
        })
        )
    }
    componentDidMount() {
        this.getData()
    }

    render() {
        // const props= this.props
        // const dishId = props.match.params.id
         console.log("234567",this.state.item)

        return (
            <div className="ItemPage">

                
                <Item picture={this.state.item.picture} name={this.state.item.name}/>
                <Ingredients nutrition={this.state.item.nutrition} ingredients ={this.state.item.ingredients} isSpicy={this.state.item.isSpicy} isHot={this.state.item.isHot} />
                <Divider section />
                <Container>   
                    <h1>Comment section</h1>
                    <h3>leave a comment</h3>
                </Container>
                <CommentList />
                <AddComment />
            </div>
        )
    }


}
export default ItemPage
