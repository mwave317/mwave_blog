import React, { Component } from 'react';
import axios from 'axios';

export default class ComponentReview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentsForReview: {},
            firstComment: '',
            secondComment: '',
            thirdComment: '',

        }
    }

    componentDidMount() {
        axios.get('/api/comment/not_verified')
        .then(res => {
            console.log(res.data);
            this.setState({ commentsForReview: res.data});
            console.log('These are the comments for review', this.state.commentsForReview[0]._id);
        })
    }

    acceptComment() {
        let commentId = '5cd4342218aa130206ed7087';
        axios.patch('/api/comment/update', {
            commentId,
            verfied: true,
        })
    }

    render() {
        return(
            <div>
                <p onClick={this.acceptComment}>Need to build this.</p>
            </div>
        )
    }
}