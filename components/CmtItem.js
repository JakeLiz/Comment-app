import React, { Component } from 'react'
import InputComment from './InputComment'


class CmtItem extends Component {
    constructor (props) {
        super(props)
        const { name, comment, depth } = props
        this.name = name
        this.comment = comment
        this.depth = depth
        this.state = {
          vote: 0,
          noReply: true, 
          replies:[]
        }
    this.handleUp = this.handleUp.bind(this)
    this.handleDown = this.handleDown.bind(this)
    this.showReply = this.showReply.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    }

    // Add votes
    handleUp() {
        const { vote } = this.state
        this.setState({
          vote: vote + 1,
        })
    }

    // Decrease votes
    handleDown() {
        const { vote } = this.state
        this.setState({
          vote: vote - 1,
        })
    }

    // let reply button be shown
    showReply() {
        this.setState({
          noReply: !this.state.noReply
        });
    }

    // add a new reply
    onSubmit(name, replyContent) {
        var replies = this.state.replies
        this.setState({
            replies: [...replies, [name, replyContent]]
        })
        this.showReply()
    }

    render () {
        const { vote } = this.state

        return (

            <div className='input'>
                <p className='name'>
                    <span>{this.name} </span>：
                </p>
                <p className='comment'>
                    {this.comment}
                </p>

                <button onClick={this.handleUp}>∧</button>
                <h>{vote}</h>
                <button onClick={this.handleDown}>∨</button>

                {this.state.replies.map((reply, index) => <CmtItem key = {index} name = {reply[0]} comment = {reply[1]} depth = { this.depth + 1 } />)}
                {this.depth < 2 && (<button onClick={this.showReply}>reply</button>)}
                {/* <button onClick={this.showReply}>reply</button> */}
                <div style={{ display: this.state.noReply ? 'none' : 'block' }}>
                    <InputComment onSubmit = { this.onSubmit } />
                </div>
            </div>
        )
    }
  }

export default CmtItem