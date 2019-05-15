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
                 <button value={comment._id} type="submit"  onClick={this.acceptComment}>Update Comment</button> 
                 <button value={comment._id}  type="submit" onClick={this.deleteComment}>Delete Comment</button>
                </div>
            ) 
        });
    }

    acceptComment(event) {
        axios.patch('/api/comment/verified/update', {
            commentId: event.target.value,
            verified: true,
        })
    }

    deleteComment(event) {
        axios.delete('/api/comment/verified/delete', {
            data: {commentId: event.target.value},
        }); 
    }

    render() {
        console.log(this.props.review);
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