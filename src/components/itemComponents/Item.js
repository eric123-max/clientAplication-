import React from 'react'
import { Image, Rail, Segment } from 'semantic-ui-react'

class Item extends React.Component {

    render() {
        return (
            <div className="Item">

                <h1>Item details</h1>
                <Segment textAlign='center'>
                    <Image src="https://picsum.photos/1400/500" alt="background" />
                    <Rail internal position='left'>
                        <Segment>Dish name: fieuqhfiueh</Segment>
                    </Rail>
                </Segment>
                <p></p>
            </div>
        )
    }



}
export default Item
