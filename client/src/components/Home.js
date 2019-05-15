import React, { Component } from 'react';
import '../css/Home.css';
import '../css/Media.css';
import Post from './Post';
import Details from './Details';
import CommentReview from './CommentReview';
import Reply from './Reply';
import DisplayComments from './DisplayComment';

export default class Home extends Component {

    render() {
        console.log(this.props.date);
            return (  
                <div>
                    <div className="name">
                        <div className="home-post">
                            <Post path={`$url}/$postId`} date={this.props.date} />
                                <div className="home-details"> 
                                   <Details date={this.props.date} onCommentSubmit={this.props.onCommentSubmit } />
                                </div> 
                        </div>
                           {/* <CommentReview/>  */}
                           <Reply date={this.props.date}/>
                    </div> 
                    <DisplayComments /> 
                </div>
            )  
    }
}