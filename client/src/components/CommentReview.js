import React, { Component } from 'react';
import axios from 'axios';

export default class ComponentReview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentsForReview: [],
            firstComment: '',
            secondComment: '',
            thirdComment: '',

        }
    }

    componentDidMount() {
        axios.get('/api/comment/not_verified')
        .then(res => {
            console.log(res.data);
            this.setState({ commentsForReview: res.data});
            console.log('These are the comments for review', this.state.commentsForReview);
        })
    }

    acceptComment() {
        let commentId = '5cd4351718aa130206ed7088';
        axios.patch('/api/comment/verified/update', {
            commentId,
            verified: false,
        })
    }

    deleteComment() {
        let commentId = '5cd4342218aa130206ed7087';
        axios.delete('/api/comment/verified/delete', {
            data: {commentId,
        }}); 
    }

    render() {
        let commentsWhichNeedToBeVerified = this.state.commentsForReview;
        let displayComments = commentsWhichNeedToBeVerified.map((comment, index) => <div><p key={index}>{comment.comment} - {comment.firstName}</p> <button onClick={this.acceptComment}>Update Comment</button> <button onClick={this.deleteComment}>Delete Comment</button></div>);
        return(
            <div>
                {displayComments}
            </div>
        )
    }
}