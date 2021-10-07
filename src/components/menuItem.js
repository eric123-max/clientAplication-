import React from 'react'
import { Card, Icon, Image, Item } from 'semantic-ui-react'
import { Rating } from 'semantic-ui-react'

class MenuItem extends React.Component {

    render() {
        const props = this.props
        console.log(props)
        console.log(props.completed)
        return (
            <div className="MenuItem">
                    <Item.Group>
                        <Card href={"/item/"+props.id}>
                            <Image src={props.picture} />
                            <Card.Content>
                                <Card.Header>{props.name}</Card.Header>
                                <Card.Meta></Card.Meta>
                                <Card.Description>
                                    <Rating icon='star' defaultRating={1} maxRating={5} />
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Icon name='calendar alternate outline' />
                                {props.date}
                            </Card.Content>
                        </Card>
                    </Item.Group>

            </div>
        )
    }
}
export default MenuItem

