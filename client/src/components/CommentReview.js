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
                 <button value={comment._id} onClick={this.acceptComment}>Update Comment</button> 
                 <button value={comment._id} onClick={this.deleteComment}>Delete Comment</button>
                </div>
            ) 
        });
    }

    acceptComment(event) {
        let commentId = event.target.value;
        console.log(commentId);
        axios.patch('/api/comment/verified/update', {
            commentId,
            verified: true,
        })
    }

    deleteComment(event) {
        let commentId = event.target.value;
        console.log(commentId);
        axios.delete('/api/comment/verified/delete', {
            commentId,
        }); 
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