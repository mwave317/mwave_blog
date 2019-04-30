import React, { Component } from 'react';
import '../css/Recent.css';
export default class Recent extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="recent">
                <p><span className="recent-title">Creating a pyramid </span> February 14, 2018</p>
                <p><span className="recent-title">Creating a sprial </span>February 8, 2018</p>
                <p><span className="recent-title">Remembering the Fundementals </span>January 26, 2018</p>
            </div>
        )
    }
}