import  React, { Component } from 'react';
import '../css/Details.css';
import Comment from './Comment';
import Archives from './Archives';
import Recent from './Recent';

export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment : ' ',
        }
    }

    render() {
        return (
            <div className="details">
                <p><span className="details-posted">Posted on </span>February 14, 2018</p>
                <p><span className="details-posted">Posted in </span>JavaScript - functions</p>
                <Comment onCommentSubmit={this.props.onCommentSubmit} />
                <Archives />
                <Recent />
            </div>
        );
    }
}