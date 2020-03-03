import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class InputComment extends Component {
  constructor(props) {
    super(props)
    const { onSubmit } = props
    this.onSubmit = onSubmit

    this.state = {
      name: '', 
      comment: '',
      noReply: true
    }
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeComment = this.handleChangeComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Update name according to the input
  handleChangeName (e) {
    this.setState(
      {
        name: e.target.value, 
      })
  }

  // Update comment according to the input
  handleChangeComment (e) {
    this.setState(
      {
        comment: e.target.value
      })
  }

  // Update on submission and reset input box
  handleSubmit () {
    var name = this.state.name
    var comment = this.state.comment
    this.setState({name: '', comment: '', noReply: true})
    this.onSubmit(name, comment)

  }

  render() {
    return (
      <>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <div className='New Post'>
          <h>New Post</h>
          <br></br>
          <input value={this.state.name} onChange={this.handleChangeName} placeholder="Name..."/>
          <br></br>
          <div className="form-group shadow-textarea">
            <textarea className="form-control z-depth-1" id="exampleFormControlTextarea6" rows="3" value={this.state.comment} onChange={this.handleChangeComment} placeholder="Write a new post..."></textarea>
        </div>
          <button disabled={!this.state.name || !this.state.comment} onClick={this.handleSubmit} >Submit</button>
        </div>
      </>
    )
  }
}

export default InputComment
