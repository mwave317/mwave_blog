import React, { Component } from 'react';
import '../css/Home.css';
import '../css/Media.css';
import Post from './Post';
import Details from './Details';
import CommentReview from './CommentReview';

export default class Home extends Component {

    render() {
            return (  
                <div>
                    <div className="name">
                        <div className="home-post">
                            <Post date={this.props.date} />
                                <div className="home-details"> 
                                   <Details date={this.props.date} onCommentSubmit={this.props.onCommentSubmit } />
                                </div> 
                        </div>
                           <CommentReview/> 
                    </div> 
                </div>
            )  
    }
}