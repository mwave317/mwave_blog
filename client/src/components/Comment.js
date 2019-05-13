import React, { Component } from 'react';
import '../css/Comment.css';
import { connect } from 'react-redux';
import Reply from './Reply';
import * as actions from '../actions';
import axios from 'axios';

class Comment extends Component {
    constructor(props){
        super(props);
            this.state = {
                comment: '',
                active: false,
                commentStatus: 'Leave a comment',
                postId: '5cd793573fadb2277a443287',
                userId: '5cd1d33ff90369044bb357c0',
                firstName: '',
            }
    }

    componentDidMount() {
        if (this.props !== null) {
        axios.get('/api/posts/recent')
        .then(res => {
            this.setState({ postId: res.data[0]._id, userId: res.data[0]._user, firstName: this.props.auth.firstName});
        });
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
            _post: this.state.postId,
            _user: this.state.userId,
            timestamp: this.props.date,
            firstName: this.state.firstName,
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
        console.log(this.props.auth);
        const toggleActiveState = this.state.active ? 'comment-add' : 'hide'; 
        return (
            <div>
                  <p onClick={this.toggleClass}>{this.state.commentStatus}</p> 
                  <div className={toggleActiveState}>
                    <textarea  className="comment-body" onChange= { ev => this.handleChange ('comment', ev)}
                     onKeyDown={ ev => this.keyPress(ev, this.state)} type='text' placeholder='Enter your comment here...' value= {this.state.comment } />
                     <button type="submit" onClick={this.submitComment} className="comment-button">Submit</button>
                  </div>

                  {/* <Reply date={this.props.date} /> */}
            </div>
        )
    }
}

function mapStateToProps({ auth }) {
    return { auth };
  }
  
  export default connect(mapStateToProps, actions)(Comment);