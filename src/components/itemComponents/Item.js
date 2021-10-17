import React from 'react'
import { Image, Rail, Segment } from 'semantic-ui-react'

class Item extends React.Component {

    render() {
        const props = this.props
        console.log(props)
        console.log(props.completed)
        return (
            <div className="Item">
                <h1>Item details</h1>
                <Segment textAlign='center'>
                    <Image src={props.picture} id = "pictureSize"/>
                    <Rail internal position='left'>
                        <Segment><h3>{props.name}</h3></Segment>
                    </Rail>
                </Segment>
                <p></p>
            </div>
        )
    }



}
export default Item
