import React, { Component } from 'react';
import '../css/Home.css';
import '../css/Media.css';
import Post from './Post';
import PastPost from './PastPost';
import Details from './Details';
import DisplayComments from './DisplayComment';

import { connect } from 'react-redux';
import { fetchPastPost } from '../actions';

class Home extends Component {
    render() {

            return (  
                <div>
                    <div className="name">
                        <div className="home-post">
                            {/* { (this.state.test &&
                                <PastPost />
                              ) || (
                                  <Post date={ this.props.date } />
                              )
                            } */}

                            { (this.props.postId ? <PastPost clickedPost={this.props.clickedPost} postId={this.props.postId} /> : <Post date={ this.props.date } postId={this.props.postId} />)

                            }

                                <div className="home-details"> 
                                   <Details date={this.props.date} onCommentSubmit={this.props.onCommentSubmit } showPastPost={this.props.showPastPost} keyPress={this.props.keyPress} postId={this.props.postId} />
                                </div> 
                        </div>
                    </div> 
                    <DisplayComments date={this.props.date} clickedPost={this.props.clickedPost} postId={this.props.postId} keyPress={this.props.keyPress} /> 
                </div>
            )  
    }
}

function mapStateToProps({ past}) {
    return { past };
  }
  
  export default connect(mapStateToProps, { fetchPastPost })(Home);