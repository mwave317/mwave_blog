import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPastPost } from '../actions';

import '../css/PastPost.css';
import '../css/Media.css';


class PastPost extends Component {

        componentDidMount() {
            this.props.fetchPastPost(this.props.postId);
        }

        renderPastPost() {
            return this.props.past.map(past => {
                return (
                    <pre>
                        <div key={past._id}>
                            <h4 className="past-title">{past.title}</h4>
                            <p className="past-line">{past.body}</p>
                        </div>
                    </pre>
                )
            })
        }

        render() {
            return (
            <div className="past">
                     <div key={this.props.past._id}>
                        <h4 className="past-title">{this.props.past.title}</h4>
                        <p className="past-line">{this.props.past.body}</p>
                    </div>
            </div>
            )
        }
}

function mapStateToProps({ past}) {
    return { past };
  }
  
  export default connect(mapStateToProps, { fetchPastPost })(PastPost);