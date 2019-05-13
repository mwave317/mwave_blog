import React, { Component } from 'react';
import '../css/Post.css';
import '../css/Media.css';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { fetchRecentPost } from '../actions';

class Post extends Component {
    constructor(props) {
        super(props);
        }

        componentDidMount() {
            this.props.fetchRecentPost();
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
  
  export default connect(mapStateToProps, { fetchRecentPost })(Post);
  