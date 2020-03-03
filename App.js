import React, { Component } from 'react'

import Title from './components/Title'
import CommentContainer from './components/CommentContainer'
import InputComment from './components/InputComment'

import 'bootstrap/dist/css/bootstrap.min.css'


class App extends Component {
  constructor () {
    super()
    this.state = {
      comments: []
    }
    this.onSubmit = this.onSubmit.bind(this);

  }

  // Update on submission
  onSubmit (name, comment) {
    this.setState({
      comments: [...this.state.comments, [name, comment]]
    })
  }

  render() {
    return (
      <>
        <Title/>
        <br></br>
        <InputComment onSubmit={this.onSubmit} />
        <br></br>
        <CommentContainer comments={this.state.comments}/>
      </>
    )
  }
}

export default App