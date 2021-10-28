import React from 'react'
import { Comment } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'


class Comments extends React.Component {
    render() {
        const props = this.props
        // console.log(387638763, props)
        console.log(props.completed)
        return (
            <div className="Comments" >
                <div id="respond">
                    <Container>
                    <Comment.Group>
                        <Comment>
                            <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                             <Comment.Content>
                                <Comment.Author>{props.name}</Comment.Author>
                                <Comment.Metadata>
                                    {props.Id}
                                </Comment.Metadata>
                                <Comment.Text>
                                    <p>
                                        {props.content}
                                    </p>
                                </Comment.Text>
                                <Comment.Actions>
                                    <Comment.Action>Reply</Comment.Action>
                                </Comment.Actions>
                            </Comment.Content>
                        </Comment>
                    </Comment.Group>
                    </Container>
                </div>
            </div>
        )
    }

}
export default Comments