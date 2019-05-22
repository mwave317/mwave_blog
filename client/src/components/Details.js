import  React, { Component } from 'react';
import '../css/Details.css';
import AddComment from './AddComment';
import Archives from './Archives';
import Recent from './Recent';
import { connect } from 'react-redux';
import { fetchRecentPost, fetchPastThree, fetchPastPost } from '../actions';

class Details extends Component {

    componentDidMount() {
        this.props.fetchRecentPost();
    }

    detailsOfRecentPost() {
        return this.props.recent.map(details => {
            return(
                <div key={details._id}>
                    <p><span className="details-posted">Posted on </span>{details.timestamp}</p>
                    <p><span className="details-posted">Posted in </span>{details.category}</p>
                </div>
            )  
        })
    }

    detailsOfPastPost() {
            return(
                <div key={this.props.past._id}>
                    <p><span className="details-posted">Posted on </span>{this.props.past.timestamp}</p>
                    <p><span className="details-posted">Posted in </span>{this.props.past.category}</p>
                </div>
            )  
    }

    showDetails() {
        let details;
        if (this.props.past._id === undefined) {
           details =  this.detailsOfRecentPost();
           return details;
        } else {
            details = this.detailsOfPastPost()
            return details;
        }

    }

    render() {
        return (
            <div className="details">
               {this.showDetails()}
                <AddComment onCommentSubmit={this.props.onCommentSubmit} date={this.props.date} postId={this.props.past._id} />
                <Archives />
                <Recent showPastPost={this.props.showPastPost} postId={this.props.postId} />
            </div>
        );
    }
}

function mapStateToProps({ recent, pastThree, past}) {
    return { recent, pastThree, past };
  }
  
  export default connect(mapStateToProps, { fetchRecentPost, fetchPastThree, fetchPastPost })(Details);
