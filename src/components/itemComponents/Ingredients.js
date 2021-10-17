import React from 'react'
import { Container } from 'semantic-ui-react'
import { Card, Divider } from 'semantic-ui-react'

class Ingredients extends React.Component {

  render() {
    const props = this.props
    console.log(props)
    console.log(props.completed)

    return (
      <div className="Ingredients">

        <Container text>
          {/* <Header as='h2'>Ingredients</Header>
          {
            // props.paragraphs.map(function(item, index){
            //   return <p key={index}>{item}</p>
            // })
            props.ingredients
          }
          <Header as='h2'>Nutrition</Header>
          {props.nutrition}
          <Header as='h2'>Spicy:</Header>
          {props.isSpicy}
          <Header as='h2'>Is hot:</Header>
          {props.isHot} */}

          <Card fluid>
            <Card.Content>
              <Card.Header>Ingredients</Card.Header>
              <Card.Description>
                {
                  props.ingredients
                }
              </Card.Description>

              <Divider section />
              <Card.Header>Nutrition</Card.Header>
              <Card.Description>{props.nutrition}</Card.Description>


            </Card.Content>
          </Card>

        </Container>

      </div>
    )
  }
}

export default Ingredients