import React, { Component } from 'react';
import '../css/Comment.css';
import { connect } from 'react-redux';
import * as actions from '../actions';
import axios from 'axios';

class AddComment extends Component {
    constructor(props){
        super(props);
            this.state = {
                comment: '',
                active: false,
                commentStatus: 'Leave a comment',
            }
    }

    toggleClass = () => {
        if (this.props.auth) {
            this.setState({active: !this.state.active});
        this.setState({commentStatus: 'Leave a comment'});
        } else {
            this.setState({commentStatus: 'Log in to comment'});
        }
}

    handleChange(state, ev) {
        if (ev.target.value.includes('<script>')) {
            this.setState({comment: ''})
        } else {
            this.setState({ [state] : ev.target.value });
        }
    }

    submitComment = () => { 
        axios.post('/api/comment/add', {
            comment: this.state.comment,
            _post: this.props.recent[0]._id,
            _user: this.props.auth._id,
            timestamp: this.props.date,
            firstName: this.props.auth.firstName,
        });

        this.setState({ comment : ''})
    }

    keyPress(ev) {
        if (ev.key === "Enter") {
            this.setState({active: !this.state.active, commentStatus : 'Your comment is waiting for review.'});
        } else {
            this.setState({active: true})
        }
    }

    render() {
        const toggleActiveState = this.state.active ? 'comment-add' : 'hide'; 
        return (
            <div>
                  <p onClick={this.toggleClass}>{this.state.commentStatus}</p> 
                  <div className={toggleActiveState}>
                    <textarea  className="comment-body" onChange= { ev => this.handleChange ('comment', ev)}
                     onKeyDown={ ev => this.keyPress(ev, this.state)} type='text' placeholder='Enter your comment here...' value= {this.state.comment } />
                     <button type="submit" onClick={this.submitComment} className="comment-button">Submit</button>
                  </div>
            </div>
        )
    }
}

function mapStateToProps({ auth, recent }) {
    return { auth, recent };
  }
  
  export default connect(mapStateToProps, actions)(AddComment);