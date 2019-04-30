import  React, { Component } from 'react';
import '../css/Details.css';
import Archives from './Archives';
import Recent from './Recent';

export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="details">
                <p><span className="details-posted">Posted on </span>February 14, 2018</p>
                <p><span className="details-posted">Posted in </span>JavaScript - functions</p>
                <p>Leave a Comment</p> 
                <Archives />
                <Recent />
            </div>
        );
    }
}