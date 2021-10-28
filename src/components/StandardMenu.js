import React from 'react'
import { Card,Divider, Image } from 'semantic-ui-react'
import { Grid, Segment } from 'semantic-ui-react'
import Footer from './Footer'

//check the design of menu components and see why it shows things other than breakfast (homework)
class StandardMenu extends React.Component {
    render() {

        // this.state.menu.breakfast.map(function(item){
        //     return (
        //         <Grid.column>
        //             < bname = {item.name}/>
        //         </Grid.column>
        //     )
        // })

        const props = this.props
        console.log(props)
        console.log(props.completed)
        console.log("111111", props.sname)

        return (
            <div className="StandardMenu">
                  <Divider hidden /> 
                <h1>{props.date}'s Menu</h1>
                <h2>Breakfast</h2>
                <div className="menuSection">
                    

                    <Segment >

                        <Grid columns={3}>

                            <Grid.Row color="grey">

                                {
                                    props.bname.map(function (item) {
                                        return (
                                            <Grid.Column key={item._id}>
                                                <Card key={item._id} className="CardSize" fluid>
                                                    <Card.Content>
                                                        <Image
                                                            floated='right'
                                                            size='tiny'
                                                            src={item.picture}
                                                        />
                                                        <Card.Header>{item.name}</Card.Header>
                                                    </Card.Content>
                                                </Card>
                                            </Grid.Column>
                                        )
                                    })
                                }
                            </Grid.Row>

                        </Grid>
                    </Segment>
                </div>

                <h2>Lunch</h2>
                <div className="menuSection">
                    <Segment>
                        <Grid columns={3} id="id2">
                                <Grid.Row>


                                    {
                                        props.lname.map(function (item) {
                                            return (
                                                <Grid.Column key={item._id}>
                                                    <Card key={item._id} className="CardSize" fluid>
                                                        <Card.Content>
                                                            <Image
                                                                floated='right'
                                                                size='tiny'
                                                                src={item.picture}
                                                            />
                                                            <Card.Header>{item.name}</Card.Header>
                                                        </Card.Content>
                                                    </Card>
                                                </Grid.Column>
                                            )
                                        })
                                    }



                                </Grid.Row>
                        </Grid>
                    </Segment>
                </div>
                <h2>Dinner</h2>
                <div className="menuSection">
                    <Segment>
                        <Grid columns={3} id="id3">
                                <Grid.Row color='grey'>
                                    {
                                        props.dname.map(function (item) {
                                            return (
                                                <Grid.Column key={item._id}>
                                                    <Card key={item._id} className="CardSize" fluid>
                                                        <Card.Content>
                                                            <Image
                                                                floated='right'
                                                                size='tiny'
                                                                src={item.picture}
                                                            />
                                                            <Card.Header>{item.name}</Card.Header>
                                                        </Card.Content>
                                                    </Card>
                                                </Grid.Column>
                                            )
                                        })
                                    }
                                </Grid.Row>
                        </Grid>
                    </Segment>
                </div>
                <h2>Snack</h2>
                <div className="menuSection">
                    <Segment >
                        <Grid columns={3} id="id4">
                                <Grid.Row>
                                    {
                                        props.sname.map(function (item) {
                                            return (
                                                <Grid.Column key={item._id}>
                                                    <Card key={item._id} className="CardSize" fluid>
                                                        <Card.Content>
                                                            <Image
                                                                floated='right'
                                                                size='tiny'
                                                                src={item.picture}
                                                            />
                                                            <Card.Header>{item.name}</Card.Header>
                                                        </Card.Content>
                                                    </Card>
                                                </Grid.Column>
                                            )
                                        })
                                    }

                                </Grid.Row>
                        </Grid>
                    </Segment>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default StandardMenu
