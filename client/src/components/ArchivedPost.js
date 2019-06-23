import React, { Component, Fragment } from 'react';
import '../css/ArchivedPost.css';
// import '../css/Media.css';
import { connect } from 'react-redux';
import { fetchArchivedPosts } from '../actions';

class ArchivedPost extends Component {

        componentDidMount() {
            this.props.fetchArchivedPosts();
        }

        renderArchivedPost() {
            return this.props.archived.map(archived => {
                return (
                    <div key={archived._id}>
                        <p key={archived._id}><span className="archived-title">{archived.title}</span>{archived.postedOn}</p>
                    </div>
                )
            })
        }



        render() {
            return (
            <Fragment className="archived-content">
                <h4>Archived Posts</h4>
                    {this.renderArchivedPost()}
            </Fragment>
            )
        }
}

function mapStateToProps({ archived }) {
    return { archived };
  }
  
  export default connect(mapStateToProps, { fetchArchivedPosts })(ArchivedPost);