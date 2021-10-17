import React from 'react'
import { Card, Icon, Image, Rating } from 'semantic-ui-react'

class MenuItem extends React.Component {

    render() {
        const props = this.props
        // console.log(props)
        // console.log(props.completed)
        // var today = new Date()
        // var day = today.getDay()
    
        // const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        //href={"/item/"+props.id}
        return (
            <div className="MenuItem">
                <Card fluid href={"/item/"+props.id}>
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
            </div>
        )
    }
}
export default MenuItem

