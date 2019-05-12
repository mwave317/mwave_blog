import React, { Component } from 'react';
import '../css/Post.css';
import '../css/Media.css';
import axios from 'axios';

export default class Post extends Component {
    constructor(props) {
        super(props);
            this.state = {
               title: '',
               body: '',
               postId: ''
            }
        }

        componentDidMount() {
            axios.get('/api/posts/recent')
            .then(res => {
                console.log(res);
                this.setState({ title: res.data[0].title, body: res.data[0].body, postId: res.data[0]._id});
            })
        }

        render() {
            console.log(this.props.auth);
            return (
            <div className="post-content">
                    <h4 className="post-title">{this.state.title}</h4>
                    <p className="post-line">{this.state.body}</p>
            </div>
            )
        }
}