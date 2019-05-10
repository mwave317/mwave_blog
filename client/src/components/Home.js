import React, { Component } from 'react';
import '../css/Home.css';
import '../css/Media.css';
import Post from './Post';
import Details from './Details';
import CommentReview from './CommentReview';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
            return (  
                <div>
                    <div className="name">
                        <div className="home-post">
                            <Post title={this.props.title} body={this.props.body} />
                                <div className="home-details"> 
                                   <Details onCommentSubmit={this.props.onCommentSubmit } />
                                </div> 
                        </div>
                            
                    </div> 
                    {/* <CommentReview /> */}
                </div>
            )  
    }
}