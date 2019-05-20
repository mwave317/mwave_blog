import  React, { Component } from 'react';
import '../css/Details.css';
import AddComment from './AddComment';
import Archives from './Archives';
import Recent from './Recent';
import { connect } from 'react-redux';
import { fetchRecentPost, fetchPastThree } from '../actions';

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

    render() {
        return (
            <div className="details">
                {this.detailsOfRecentPost()}
                <AddComment onCommentSubmit={this.props.onCommentSubmit} date={this.props.date} />
                <Archives />
                <Recent />
            </div>
        );
    }
}

function mapStateToProps({ recent, pastThree}) {
    return { recent, pastThree };
  }
  
  export default connect(mapStateToProps, { fetchRecentPost, fetchPastThree })(Details);
