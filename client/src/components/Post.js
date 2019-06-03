import React, { Component } from 'react';
import axios from 'axios';
import '../css/Post.css';
import '../css/Media.css';
import { connect } from 'react-redux';
import { fetchRecentPost, fetchPostComments } from '../actions';

class Post extends Component {

        componentDidMount() {
            this.props.fetchRecentPost(this.props.recent._id);

            let test = axios.get('/api/posts/archivedposts', {params: { start_date : "2019-05-01", end_date: "2019-05-31"  }})
            console.log(test);
        }

        renderRecentPost() {
            return this.props.recent.map(recent => {
                return (
                    <div key={recent._id}>
                        <h4 className="post-title">{recent.title}</h4>
                        <p className="post-line">{recent.body}</p>
                    </div>
                )
            })
        }

        render() {
            return (
            <div className="post-content">
                    {this.renderRecentPost()}
            </div>
            )
        }
}

function mapStateToProps({ recent}) {
    return { recent };
  }
  
  export default connect(mapStateToProps, { fetchRecentPost, fetchPostComments })(Post);
  