import React from 'react'
import { Button, Container, Form } from 'semantic-ui-react'
import client from '../client'


class AddComment extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            content: ""
        }
        this.handleContent = this.handleContent.bind(this)
        this.handleAddComment = this.handleAddComment.bind(this)

    }
    handleContent(ev) {
        var value = ev.target.value
        console.log(value)
        this.setState({ content: value })
    }

    handleAddComment() {

        const commentsService = client.service('comment')
        console.log(commentsService)
        commentsService.create({
            "Id": "user1",
            "DishId": this.props.dishId,
            "content": this.state.content
        })
            .then(function (r) { console.log(r) })

    }


    render() {

        console.log(3987387638735763546534, this.props)
        return (
            <div className="AddComment" >
                <Container>
                    <Form reply>
                        <Form.TextArea onChange={this.handleContent} value={this.state.content} />
                        <Button onClick={this.handleAddComment} content='Add Comment' labelPosition='left' icon='edit' primary />
                    </Form>
                </Container>
            </div>
        )
    }

}
export default AddComment