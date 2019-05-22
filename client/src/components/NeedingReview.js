import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { fetchCommentsNeedingReview, fetchRepliesNeedingReview } from '../actions';

class NeedingReview extends Component {

    componentDidMount() {
      this.props.fetchCommentsNeedingReview();
      this.props.fetchRepliesNeedingReview();
    }

    commentsNeedingReview() {
        return this.props.review.map(comment => {
            return (
                <div key={comment._id}>
                 <p>{comment.comment} - {comment.firstName}</p>
                 <button value={comment._id} type="submit"  onClick={this.acceptComment}>Update Comment</button> 
                 <button value={comment._id}  type="submit" onClick={this.deleteComment}>Delete Comment</button>
                </div>
            ) 
        });
    }

    repliesNeedingReview() {
        return this.props.reviewReplies.map(reply => {
            return (
                <div key={reply._id}>
                 <p>{reply.reply} - {reply.firstName}</p>
                 <button value={reply._id} type="submit"  onClick={this.acceptReply}>Update Reply</button> 
                 <button value={reply._id}  type="submit" onClick={this.deleteReply}>Delete Reply</button>
                </div>
            ) 
        });
    }

    acceptComment(event) {
        axios.patch('/api/comment/verified/update', {
            commentId: event.target.value,
            reviewed: true,
        })
    }

    deleteComment(event) {
        axios.delete('/api/comment/verified/delete', {
            data: {commentId: event.target.value},
        }); 
    }

    acceptReply(event) {
        axios.patch('/api/reply/verified/update', {
            replyId: event.target.value,
            reviewed: true,
        })
    }

    deleteReply(event) {
        axios.delete('/api/reply/verified/delete', {
            data: {replyId: event.target.value},
        }); 
    }

    render() {
        console.log(this.props.reviewReplies);
        return(
            <div>
                {this.commentsNeedingReview()}
                {this.repliesNeedingReview()}
            </div>
        )
    }
}

function mapStateToProps({ review, reviewReplies}) {
    return { review, reviewReplies };
  }
  
  export default connect(mapStateToProps, { fetchCommentsNeedingReview, fetchRepliesNeedingReview })(NeedingReview);