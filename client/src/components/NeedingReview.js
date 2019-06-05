import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { fetchCommentsNeedingReview, fetchRepliesNeedingReview } from '../actions';
import '../css/NeedingReview.css';
import '../css/Media.css';


class NeedingReview extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    componentDidMount() {
      this.props.fetchCommentsNeedingReview();
      this.props.fetchRepliesNeedingReview();
    }

    commentsNeedingReview = () => {
        return this.props.reviewComments.map((comment, index) => {
                return (
                    <div key={comment._id} value={index}>
                     <p className="review-needed">{comment.comment} - {comment.firstName}</p>
                     <button value={comment._id} type="submit"  onClick={this.acceptComment}>Update Comment</button> 
                     <button value={comment._id}  type="submit" onClick={this.deleteComment}>Delete Comment</button>
                    </div>
                ) 
        });
    }

    repliesNeedingReview() {
        return this.props.reviewReplies.map(reply => {
            return (
                    <div key={reply._id} >
                     <p className="review-needed">{reply.reply} - {reply.firstName}</p>
                     <button value={reply._id} type="submit"  onClick={this.acceptReply}>Update Reply</button> 
                     <button value={reply._id}  type="submit" onClick={this.deleteReply}>Delete Reply</button>
                    </div>
            ) 
            
        });
    }

    acceptComment = (event) => {
        axios.patch('/api/comment/verified/update', {
            commentId: event.target.value,
            reviewed: true,
        })  
    }

    deleteComment = (event) => {
        axios.delete('/api/comment/verified/delete', {
            data: {commentId: event.target.value},
        }); 
        this.setState({active: true})
    }

    acceptReply = (event) => {
        axios.patch('/api/reply/verified/update', {
            replyId: event.target.value,
            reviewed: true,
        })
    }

    deleteReply = (event) => {
        axios.delete('/api/reply/verified/delete', {
            data: {replyId: event.target.value},
        }); 
    }

    render() {
        if (this.props.reviewComments.length > 0 || this.props.reviewReplies.length > 0) {
            return(
                <div className="review">
                    <h4 className="review-title">Needing Review</h4>
                    {this.commentsNeedingReview()}
                    {this.repliesNeedingReview()}
                </div>
            )

        } else {
            return (
                <div className="review">
                    <h4 className="review-title">Needing Review</h4>
                    <p>There's nothing to review.</p>
                </div>
            )
        }
        
    }
}

function mapStateToProps({ reviewComments, reviewReplies}) {
    return { reviewComments, reviewReplies };
  }
  
  export default connect(mapStateToProps, { fetchCommentsNeedingReview, fetchRepliesNeedingReview })(NeedingReview);