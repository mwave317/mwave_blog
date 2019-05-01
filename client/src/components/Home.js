import React, { Component } from 'react';
import '../css/Home.css';
import '../css/Media.css';
import Post from './Post';
import Details from './Details';
import Comment from './Comment';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        console.log(this.props);
            return (  
                <div>
                    <div className="name">
                        <div className="home-post">
                            <Post title={this.props.title} body={this.props.body} handleChange={this.props.handleChange} />
                                <div className="home-details">
                                   <Details />
                                </div> 
                        </div>
                    </div> 
                    <Comment onCommentSubmit={this.props.onCommentSubmit} /> 
                </div>
            )  
    }
}