import React from 'react'
import { Container, Header } from 'semantic-ui-react'

class Ingredients extends React.Component {

  render() {
        const props = this.props
    return (
      <div className="Ingredients">
        <Container text>
          <Header as='h2'>Ingredients</Header>
          {
            props.paragraphs.map(function(item, index){
              return <p key={index}>{item}</p>
            })
          }
        </Container>
      </div>
    )
  }
}

export default Ingredients