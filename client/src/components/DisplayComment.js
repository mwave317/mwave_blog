import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchRecentPostComments } from '../actions';


class DisplayComment extends Component {

    componentDidMount() {
        this.props.fetchRecentPostComments();
    }

    getComments() {
        return this.props.recentComments.map(comment => {
            if (comment.replies.length === 0) {
                return (
                    <div key={comment._id}>
                    <p>This is the comment - {comment.comment}</p>
                    <p><span>{comment.firstName}</span> {comment.timestamp}</p>
                    </div>
                )
            } else {
                return (
                    <div key={comment._id}>
                <p>This is the comment - {comment.comment}</p>
                <p><span>{comment.firstName}</span> {comment.timestamp}</p>
                <p>{this.getReplys()}</p>
                </div>

                )
            }
        })
    }

    getReplys() {
            return this.props.recentComments.map(comment => {                
                    return comment.replies.map(replies => {
                            return (
                                <div key={comment._id}>
                                <p>This is the reply  {replies.reply} </p>
                                <p><span>{replies.firstName}</span> {replies.timestamp}</p>
                                </div>
                            )
                    })
            }) 
    }

    render() {
        return(
            <div>
                {this.getComments()}
            </div>
        )
    }
}

function mapStateToProps({ recentComments}) {
    console.log( recentComments);
    return { recentComments };
  }
  
  export default connect(mapStateToProps, { fetchRecentPostComments })(DisplayComment);