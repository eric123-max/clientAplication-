import React from 'react'
import { Button, Container, Form } from 'semantic-ui-react'


class AddComment extends React.Component {
    render() {
        return (
            <div className="AddComment" >
                <Container>
                    <Form reply>
                        <Form.TextArea />
                        <Button content='Add Comment' labelPosition='left' icon='edit' primary />
                    </Form>
                </Container>
            </div>
        )
    }

}
export default AddComment