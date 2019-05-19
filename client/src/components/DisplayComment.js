import React, { Component } from 'react';
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
                    <p>{comment.comment}</p>
                    <p><span>{comment.firstName}</span> {comment.timestamp}</p>
                    </div>
                )
            } else {
                return (
                    <div>
                    <div key={comment._id}>
                <p> {comment.comment}</p>
                <p><span>{comment.firstName}</span> {comment.timestamp}</p>
                {this.getReplys(comment.replies)}
                </div>
                </div>

                )
            }
        })
    }

    getReplys(comment) {
            return comment.map((comment, index) => {  
                return (
                    <div>
                    <p>{comment.reply }</p>
                    <p><span>{ comment.firstName}</span> {comment.timestamp}</p>
                    </div>
                )   
            });
    };

    render() {
        return(
            <div>
                {this.getComments()}
            </div>
        )
    }
}

function mapStateToProps({ recentComments}) {
    return { recentComments };
}

  export default connect(mapStateToProps, { fetchRecentPostComments })(DisplayComment);