import React, { Component } from 'react';
import '../css/Home.css';
import '../css/Media.css';
import Post from './Post';
import Details from './Details';
// import NeedingReview from './NeedingReview';
import Reply from './Reply';
import DisplayComments from './DisplayComment';

export default class Home extends Component {

    render() {
            return (  
                <div>
                    <div className="name">
                        <div className="home-post">
                            <Post path={`$url}/$postId`} date={this.props.date} />
                                <div className="home-details"> 
                                   <Details date={this.props.date} onCommentSubmit={this.props.onCommentSubmit } />
                                </div> 
                        </div>
                           {/* <NeedingReview/>  */}
                           <Reply date={this.props.date}/>
                    </div> 
                    <DisplayComments /> 
                </div>
            )  
    }
}