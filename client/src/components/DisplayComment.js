import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostComments } from '../actions';
import Reply from './Reply';
import '../css/DisplayComment.css';


class DisplayComment extends Component {

    componentDidMount() {
        this.props.fetchPostComments(this.props.postId);
    }

    getComments() {
        return this.props.comments.map(comment => {
                return (
                    <div key={comment._id} className="test">
                        <div className="display ">
                            <p> {comment.comment}</p>
                            <p><span>{comment.firstName}</span> {comment.timestamp}</p>
                        </div>
                      {this.getReplys(comment.replies)}
                        <Reply date={this.props.date} commentId ={comment._id} postId={this.props.postId} />
                    </div>
                )
        })
    }

    getReplys(comment) {
            return comment.map((comment) => {  
                return (
                    <div className="display display-reply" key={comment._id}>
                    <p>{comment.reply }</p>
                    <p><span>{ comment.firstName}</span> {comment.timestamp}</p>
                    </div>
                )   
            });
    };

    render() {
        return(
            <div >
                {this.getComments()}
            </div>
        )
    }
}

function mapStateToProps({ comments}) {
    return { comments, };
}

  export default connect(mapStateToProps, { fetchPostComments })(DisplayComment);