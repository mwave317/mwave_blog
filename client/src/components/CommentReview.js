import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { fetchCommentsNeedingReview } from '../actions';

class ComponentReview extends Component {

    componentDidMount() {
      this.props.fetchCommentsNeedingReview();
    }

    commentsNeedingReview() {
        return this.props.review.map(comment => {
            return (
                <div key={comment._id}>
                     <p>{comment.comment} - {comment.firstName}</p>
                     <button onClick={this.acceptComment}>Update Comment</button> 
                     <button onClick={this.deleteComment}>Delete Comment</button>
                </div>
            ) 
        });
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
        return(
            <div>
                {this.commentsNeedingReview()}
            </div>
        )
    }
}

function mapStateToProps({ review}) {
    return { review };
  }
  
  export default connect(mapStateToProps, { fetchCommentsNeedingReview })(ComponentReview);