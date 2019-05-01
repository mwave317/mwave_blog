import React, { Component } from 'react';
import '../css/Comment.css';

export default class Comment extends Component {
    constructor(props){
        super(props);
            this.state = {
                comment: '',
                active: false,
            }
    }

    toggleClass = () => {
        this.setState({active: !this.state.active});
    }

    handleChange(state, ev) {
        if (ev.target.value.includes('<script>')) {
            this.setState({comment: ''})
        } else {
            this.setState({ [state] : ev.target.value});
            this.props.onCommentSubmit(this.state.comment);
        }
    }

    keyPress(ev) {
        if (ev.key === "Enter") {
            this.setState({active: !this.state.active, comment: ' '});
        } else {
            this.setState({active: true})
        }
    }

    render() {
        const toggleActiveState = this.state.active ? 'comment-add' : 'hide';
        return (
            <div className="comment">
                  <p onClick={this.toggleClass}>Leave a Comment</p> 
                    <textarea className={toggleActiveState} onChange= { ev => this.handleChange ('comment', ev)}
                     onKeyDown={ ev => this.keyPress(ev, this.state)} type='text' placeholder='Enter your comment here...' value= {this.state.comment } />
            </div>
        )
    }
}