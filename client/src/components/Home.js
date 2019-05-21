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

                            { (this.props.clickedPost ? <PastPost clickedPost={this.props.clickedPost} /> : <Post date={ this.props.date }  />)

                            }
                                <div className="home-details"> 
                                   <Details date={this.props.date} onCommentSubmit={this.props.onCommentSubmit } showPastPost={this.props.showPastPost} clickedPost={this.props.clickedPost} />
                                </div> 
                        </div>
                    </div> 
                    <DisplayComments date={this.props.date} /> 
                </div>
            )  
    }
}

function mapStateToProps({ past}) {
    return { past };
  }
  
  export default connect(mapStateToProps, { fetchPastPost })(Home);