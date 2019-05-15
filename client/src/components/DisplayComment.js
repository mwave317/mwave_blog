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
            return (
                <div key={comment._id}>
                <p>This is the comment - {comment.comment}</p>
                <p><span>{comment.firstName}</span> {comment.timestamp}</p>
                    <div>{this.getReplys()}</div>
                </div>
            )
        })
}

    getReplys() {
       
            return this.props.recentComments.map(comment => {
                return (
                    <div key={comment._id}>
                    {/* <p>This is the reply  {comment.replies.reply}</p> */}
                    <p><span>{comment.firstName}</span> {comment.timestamp}</p>
                    </div>
                )
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