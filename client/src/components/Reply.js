import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../css/Reply.css';

class Reply extends Component {
    constructor(props) {
        super(props);
            this.state = {
                reply: '',
                active: false,
                replyStatus: 'Reply'
            }
    }
    toggleReplyStatus = () => {
        if (this.props.auth) {
            this.setState({active: !this.state.active});
        this.setState({replyStatus: ''});
        } else {
            this.setState({replyStatus: 'Log in to reply'});
        }
}

    handleChange(state, ev) {
        if (ev.target.value.includes('<script>')) {
            this.setState({reply: ''})
        } else {
            this.setState({ [state] : ev.target.value});
        }
    }

    submitReply = () => { 
        axios.post('/api/reply/add', {
            reply: this.state.reply,
            firstName: this.props.auth.firstName,
            timestamp: this.props.date,
            _user: this.props.auth._id,
            _post: this.props.postId,
            _comment: this.props.commentId,
        });

        this.setState({ reply : ''});
    };

    render() {
        const toggleActiveState = this.state.active ? 'reply-show' : 'hide'; 

        return(
            <div >
                <p className="reply-status" onClick={this.toggleReplyStatus}>{this.state.replyStatus}</p>
                  <div className={toggleActiveState}>
                    <textarea className="reply-text" onChange= { ev => this.handleChange ('reply', ev)}
                     type='text' placeholder='Enter your reply here...' value= {this.state.reply} />
                     <button type="submit" className="reply-button" onClick={this.submitReply}>Submit</button>
                  </div>
            </div>










        )
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, actions)(Reply);