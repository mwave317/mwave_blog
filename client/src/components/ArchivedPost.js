import React, { Component } from 'react';
import '../css/ArchivedPost.css';
import '../css/Media.css';
import { connect } from 'react-redux';
import { fetchArchivedPost } from '../actions';

class ArchivedPost extends Component {

        componentDidMount() {
            this.props.fetchArchivedPost();
        }

        renderArchivedPost() {
            return this.props.archived.map(archived => {
                return (
                    <div key={archived._id}>
                        <h4 className="archived-title">{archived.title}</h4>
                        <p className="archived-line">{archived.body}</p>
                    </div>
                )
            })
        }

        render() {
            return (
            <div className="archived-content">
                    {this.renderArchivedPost()}
            </div>
            )
        }
}

function mapStateToProps({ archived }) {
    return { archived };
  }
  
  export default connect(mapStateToProps, { fetchArchivedPost })(ArchivedPost);