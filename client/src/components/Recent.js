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
            secondRecentPostDate: '',
            secondRecentPostTitle: '',
            thirdRecentPostDate: '',
            thirdRecentPostTitle: '',
        }
    }

    componentDidMount() {
        axios.get('/api/posts/recent/topthree')
        .then(res => {
            this.setState({ posts: res.data, firstRecentPostTitle : res.data[0].title, firstRecentPostDate: res.data[0].timestamp, secondRecentPostTitle : res.data[1].title, secondRecentPostDate: res.data[1].timestamp, thirdRecentPostTitle : res.data[2].title, thirdRecentPostDate: res.data[2].timestamp });
            console.log(this.state.posts);

        })
    }

    render() {
        return (
            <div className="recent">
                <h4>Recent Posts</h4>
                <p><span className="recent-title">{this.state.firstRecentPostTitle} </span>{this.state.firstRecentPostDate}</p>
                <p><span className="recent-title">{this.state.secondRecentPostTitle} </span>{this.state.secondRecentPostDate}</p>
                <p><span className="recent-title">{this.state.thirdRecentPostTitle} </span>{this.state.thirdRecentPostDate}</p>
            </div>
        )
    }
}