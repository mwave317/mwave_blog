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
    title: '',
    body: '',
    data: [],
    addedTitle: ' ',
    addedBody: ' ',
    comment: ' ',
    sender: '',
    subject: '',
    contactBody: '',
    intervalisSet: false,
    reviewed: true,
    loggedIn: true,
  }

  componentDidMount() {
    this.props.fetchUser();
  }

  onFormSubmit(state) {
    this.setState({ addedTitle: state.title, addedBody: state.body, sender: state.sender, subject: state.subject, contactBody: state.contactBody });
  }

  onCommentSubmit(state) {
    this.setState({ comment: state.comment, reviewed: state.reviewed });
  }

  render() {
    console.log(this.state);
    console.log(this.props.auth);
    // let currentLocation = window.location.pathname;
      return (
        <div >
          <BrowserRouter>
            <div>
              <Header />
              <div className="main-layout">
                <Nav />
                <Routes title={this.state.title} body={this.state.body} addedBody={this.state.addedBody} addedTitle={this.state.addedTitle} onFormSubmit={this.onFormSubmit.bind(this)} onCommentSubmit={this.onCommentSubmit.bind(this)} />
              </div>
            </div>
          </BrowserRouter>
        </div>
      )
    }
  }


function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(App);
