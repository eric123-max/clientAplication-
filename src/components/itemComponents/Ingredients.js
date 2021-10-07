import React from 'react'
import { Container, Header } from 'semantic-ui-react'

class Ingredients extends React.Component {

  render() {
        const props = this.props
        console.log(props)
        console.log(props.completed)
      
    return (
      <div className="Ingredients">
        
        <Container text>
          <Header as='h2'>Ingredients</Header>
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
          {props.isHot}

        </Container>
        
      </div>
    )
  }
}

export default Ingredients