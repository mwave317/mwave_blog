import React, { Component } from 'react';
import '../css/Recent.css';
import axios from 'axios';




export default class Recent extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            firstRecentPostDate: '',
            firstRecentPostTitle: '',
        }
    }

    componentDidMount() {
        axios.get('/api/posts/recent/topthree')
        .then(res => {
            this.setState({ posts: res.data, firstRecentPostTitle : res.data[0].title, firstRecentPostDate: res.data[0].timestamp });
            console.log(this.state.posts[0].title);

        })
    }

    render() {
        return (
            <div className="recent">
                <h4>Recent Posts</h4>
                <p><span className="recent-title">{this.state.firstRecentPostTitle} </span>{this.state.FirstRecentPostDate}</p>
                <p><span className="recent-title">Creating a sprial </span>February 8, 2018</p>
                <p><span className="recent-title">Remembering the Fundementals </span>January 26, 2018</p>
            </div>
        )
    }
}