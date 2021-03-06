import React, { Component } from 'react';
import Routes from './components/Routes';
import './App.css';
import './css/Media.css';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';

import Header from './components/Header';
import Nav from './components/Nav';

class App extends Component {
  state = {
    date: '',
    postId: '',
    start_date: '', 
    end_date: '',
  }

  componentDidMount() {
    this.props.fetchUser();
    this.formatDate();
  }

  onCommentSubmit(state) {
    this.setState({ comment: state.comment, reviewed: state.reviewed });
  }

  showPastPost = (postId) => {  
    this.setState({postId})
    this.props.fetchPastPost(postId);
    this.props.fetchPostComments(postId);
}

  getRecent = () => {
    this.setState({postId: ''});
  };

  formatDate() {
    let date = new Date();
    let dateString = date.toDateString();
    let formattedDate = dateString.split(' ').splice(1).join(' ');

    this.setState({ date: formattedDate});
  }

  getArchivedDate(month, year) {
    if (month < 10) {
        month = "0" + month;
    }

    let dash = "-";
    let beginningOfMonth = "01";
    let endOfMonth = "31";
    let start_date = year + dash + month + dash + beginningOfMonth;
    let end_date = year + dash + month + dash + endOfMonth;
    
    this.setState({ start_date, end_date })
}

  keyPress(ev) {
    if (ev.key === "Enter") {
      ev.preventDefault();
    }
  }

  render() {
      return (
        <div >
          <BrowserRouter>
            <div>
              <Header />
              <div className="main-layout">
                <Nav getRecent={this.getRecent} />
                <Routes date={this.state.date} onCommentSubmit={this.onCommentSubmit.bind(this)} showPastPost={this.showPastPost.bind(this)} postId={this.state.postId} keyPress={this.keyPress.bind(this)} getArchivedDate={this.getArchivedDate.bind(this)} />
              </div>
            </div>
          </BrowserRouter>
        </div>
      )
    }
  }


function mapStateToProps({ auth, recent}) {
  return { auth, recent };
}

export default connect(mapStateToProps, actions)(App);
