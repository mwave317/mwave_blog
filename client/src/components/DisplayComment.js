import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecentPostComments } from '../actions';
import Reply from './Reply';
import '../css/DisplayComment.css';


class DisplayComment extends Component {

    componentDidMount() {
        this.props.fetchRecentPostComments();
    }

    getComments() {
        return this.props.recentComments.map(comment => {
                return (
                    <div className="test">
                        <div className="display "  key={comment._id}>
                            <p> {comment.comment}</p>
                            <p><span>{comment.firstName}</span> {comment.timestamp}</p>
                        </div>
                      {this.getReplys(comment.replies)}
                        <Reply date={this.props.date} />
                    </div>
                )
        })
    }

    getReplys(comment) {
            return comment.map((comment, index) => {  
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

function mapStateToProps({ recentComments}) {
    return { recentComments };
}

  export default connect(mapStateToProps, { fetchRecentPostComments })(DisplayComment);