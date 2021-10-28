import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import Navigation from './components/Navigation'
// import client from './client'


// const commentsService = client.service('comment')
// console.log(commentsService)

// commentsService.find()
// .then(function(r) { console.log(r)})

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
      </div>
    )
  }



}
export default App
