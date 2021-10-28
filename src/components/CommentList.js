import React from 'react'
import Comments from './Comments'
import { Grid } from 'semantic-ui-react'
import axios from 'axios'

class CommentList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comment: []
        }
    }

    getData() {
        const self = this
        console.log(axios.get('http://localhost:3030/comment?DishId='+this.props.dishId).then(function (response) {
            console.log(response.data.data)
            self.setState({
                comment: response.data.data
            })
        }))
    }

    componentDidMount() {
        this.getData()
    }
    render() {
        console.log(9999999999, this.props)
        return (
            <div className="CommentList">
                 <Grid doubling stackable columns={1}>
                    {
                        this.state.comment.map(function (item) {
                            return (
                                <Grid.Column>
                                    <Comments Id={item.Id} content={item.content} DishId={item.DishId} />
                                </Grid.Column>
                            )
                        })
                    }
                </Grid>
            </div>
        )
    }
}

export default CommentList