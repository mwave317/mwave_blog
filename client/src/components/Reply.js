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
                firstName: '',
                _comment : '5ce1518b989c2034ec510635',
                _post : '5cd7931f3fadb2277a443287',
                _user : '5cd1d33ff90369044bb357c0',
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
            _user: this.state._user,
            _post: this.state._post,
            _comment: this.state._comment,
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
                     <button type="submit" className="reply-button" type="submit" onClick={this.submitReply}>Submit</button>
                  </div>
            </div>










        )
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, actions)(Reply);