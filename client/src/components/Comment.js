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
            this.props.onCommentSubmit(this.state);
        }
    }

    keyPress(ev) {
        if (ev.key === "Enter") {
            this.setState({active: !this.state.active, comment: ' ' });
        } else {
            this.setState({active: true})
        }
    }

    render() {
        const toggleActiveState = this.state.active ? 'comment-add' : 'hide';
        const commentStatus = !this.state.active && this.state.comment === ' ' ? 'Your comment is waiting for review.' : 'Leave a Comment';
        return (
            <div className="comment">
                  <p onClick={this.toggleClass}>{commentStatus}</p> 
                    <textarea className={toggleActiveState} onChange= { ev => this.handleChange ('comment', ev)}
                     onKeyDown={ ev => this.keyPress(ev, this.state)} type='text' placeholder='Enter your comment here...' value= {this.state.comment } />
            </div>
        )
    }
}