import React, { Component } from 'react';
import '../css/Recent.css';
import { connect } from 'react-redux';
import { fetchPastThree } from '../actions';




class Recent extends Component {

    componentDidMount() {
        this.props.fetchPastThree();
    }

    pastThreePosts() {
        return this.props.pastThree.map(pastPost => {
            return(
                    <p key={pastPost._id}><span className="recent-title">{pastPost.title} </span>{pastPost.timestamp}</p>
            )
           
        })
    }

    render() {
        return (
            <div className="recent">
                <h4>Recent Posts</h4>
            <div>{this.pastThreePosts()}</div>
            </div>
        )
    }
}

function mapStateToProps({ pastThree}) {
    return { pastThree };
  }
  
  export default connect(mapStateToProps, { fetchPastThree })(Recent);