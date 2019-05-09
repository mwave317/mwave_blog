import React, { Component } from 'react';
import '../css/Comment.css';
import { connect } from 'react-redux';
import * as actions from '../actions';
import axios from 'axios';

class Comment extends Component {
    constructor(props){
        super(props);
            this.state = {
                comment: '',
                active: false,
                commentStatus: 'Leave a comment',
                postId: '',
                userId: '',
            }
    }

    componentDidMount() {
        axios.get('/api/posts/recent')
        .then(res => {
            console.log(res);
            this.setState({ postId: res.data[0]._id, userId: res.data[0]._user});
        })
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
            console.log(this.state);
        }
    }

    submitComment = () => { 
        axios.post('/api/comment/add', {
            comment: this.state.comment,
            _post: this.state.postId,
            _user: this.state.userId,
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
        // console.log(this.props.auth);
        const toggleActiveState = this.state.active ? 'comment-add' : 'hide'; 
        return (
            <div>
                  <p onClick={this.toggleClass}>{this.state.commentStatus}</p> 
                  <div className={toggleActiveState}>
                    <textarea  className="comment-add" onChange= { ev => this.handleChange ('comment', ev)}
                     onKeyDown={ ev => this.keyPress(ev, this.state)} type='text' placeholder='Enter your comment here...' value= {this.state.comment } />
                     <button type="submit" onClick={this.submitComment} className="addPost-button">Submit</button>
                  </div>
            </div>
        )
    }
}

function mapStateToProps({ auth }) {
    return { auth };
  }
  
  export default connect(mapStateToProps, actions)(Comment);