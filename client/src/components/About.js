import React, { Component } from 'react';
import '../css/About.css';
import '../css/Media.css';
import axios from 'axios';

export default class About extends Component {
    constructor() {
        super();
        this.state = {
            body: '',
        }
    }

    componentDidMount() {
        axios.get('/api/about/about')
        .then(res => {
            console.log(res.data[0].body);
            this.setState({ body: res.data[0].body});
        })
    }

    render() {
        return (
            <div className="about">
                <h4 className="about-title">About</h4>
                <p className="about-body">{this.state.body}</p>
            </div>
        )
    }
}