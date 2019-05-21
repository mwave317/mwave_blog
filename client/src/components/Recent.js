import React, { Component } from 'react';
import '../css/Recent.css';
import { connect } from 'react-redux';
import { fetchPastThree } from '../actions';




class Recent extends Component {
    constructor(props) {
        super(props);
        this.archivedId = React.createRef();
    }
    

    componentDidMount() {
        this.props.fetchPastThree();
    }

    

    pastThreePosts() {
        // console.log(this.props.pastThree);
        
        return this.props.pastThree.map(pastPost => {
            return(
                    <p key={ pastPost._id }><span  ref={this.archivedId} onClick={() => this.props.showPastPost(pastPost._id)} className="recent-title">{pastPost.title} </span>{pastPost.timestamp}</p> 
            )
           
        })
    }

    render() {
        return (
            <div className="recent">
                <h4>Recent Posts</h4>
            {this.pastThreePosts()}
            </div>
        )
    }
}

function mapStateToProps({ pastThree}) {
    return { pastThree };
  }
  
  export default connect(mapStateToProps, { fetchPastThree })(Recent);