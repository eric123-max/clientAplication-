import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import { Grid, Segment } from 'semantic-ui-react'
import "./StandardMenu.css"

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
        console.log("111111",props.sname)
        return (
            <div className="StandardMenu">
                <h1>{props.date}'s Menu</h1>
                <h2>Breakfast</h2>
                <div className="menuSection">

                    <Segment >
                        <Card.Group>
                            <Grid columns={3}>

                                <Grid.Row color='grey'>
                                        {
                                            props.bname.map(function (item) {
                                                return (
                                                    <Card key={item._id} id="card">
                                                        <Card.Content>
                                                            <Image
                                                                floated='right'
                                                                size='mini'
                                                                src={item.picture}
                                                            />
                                                            <Card.Header>{item.name}</Card.Header>
                                                        </Card.Content>
                                                    </Card>
                                                )
                                            })
                                        }

                                </Grid.Row>
                            </Grid>
                        </Card.Group>
                    </Segment>
                </div>

                <h2>Lunch</h2>
                <div className="menuSection">
                    <Segment>
                        <Card.Group>
                            <Grid columns={3} id="id2">

                                <Grid.Row>
                                    
                                            {
                                                props.lname.map(function (item) {
                                                    return (
                                                        <Card key={item._id} id= "card">
                                                            <Card.Content>
                                                                <Image
                                                                    floated='right'
                                                                    size='mini'
                                                                    src={item.picture}
                                                                />
                                                                <Card.Header>{item.name}</Card.Header>
                                                            </Card.Content>
                                                        </Card>
                                                    )
                                                })
                                            }


                                        
                                </Grid.Row>
                            </Grid>
                        </Card.Group>
                    </Segment>
                </div>
                    <h2>Dinner</h2>
                    <div className="menuSection">
                        <Segment>
                            <Card.Group>
                                <Grid columns={3} id="id3">

                                    <Grid.Row color='grey'>
                                            {
                                                props.dname.map(function(item){
                                                    return(
                                                        <Card key={item._id}>
                                                        <Card.Content>
                                                            <Image
                                                                floated='right'
                                                                size='mini'
                                                                src={item.picture}
                                                            />
                                                            <Card.Header>{item.name}</Card.Header>
                                                        </Card.Content>
                                                    </Card>
                                                    )
                                                })
                                            }
                                    </Grid.Row>
                                </Grid>
                            </Card.Group>
                        </Segment>
                    </div>
                    <h2>Snack</h2>
                    <div className="menuSection">
                        <Segment >
                            <Card.Group>
                                <Grid columns={3} id="id4">

                                    <Grid.Row>
                                           {
                                               props.sname.map(function(item){
                                                   return(
                                                    <Card key={item._id}>
                                                    <Card.Content>
                                                        <Image
                                                            floated='right'
                                                            size='mini'
                                                            src={item.picture}
                                                        />
                                                        <Card.Header>{item.name}</Card.Header>
                                                    </Card.Content>
                                                </Card>
                                                   )
                                               })
                                           }

                                    </Grid.Row>

                                </Grid>
                            </Card.Group>
                        </Segment>
                    </div>
                </div>
                )
    }
}
                export default StandardMenu
