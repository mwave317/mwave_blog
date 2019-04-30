import React, { Component } from 'react';
import Routes from './components/Routes';
import './App.css';
import './css/Media.css';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';

import Header from './components/Header';
import Nav from './components/Nav';
import Landing from './components/Landing';



class App extends Component {
  state = {
    title: ' ',
    body: ' ',
    data: [],
    addedTitle: ' ',
    addedBody: ' ',
    intervalisSet: false,
  }

  componentDidMount() {
    this.props.fetchUser();
  }

  onFormSubmit(state) {
    this.setState({ addedTitle: state.title, addedBody: state.body });
  }


  render() {
    console.log('This is the addedTitle', this.state.addedTitle);
    console.log('This is the addedBody', this.state.addedBody);
    let currentLocation = window.location.pathname;
    if (currentLocation === '/') {
      return (

        <div>
          <BrowserRouter>
            <div>
              <Header />
              <div className="home-post">
                <Landing />
              </div>
            </div>
          </BrowserRouter>
        </div>
      );
    } else {
      return (
        <div >

          <BrowserRouter>
            <div>
              <Header />
              <div className="home-post">
                <Nav />
                <Routes addedBody={this.addedBody} addedTitle={this.addedTitle} onFormSubmit={this.onFormSubmit.bind(this)} />
              </div>
            </div>
          </BrowserRouter>
        </div>
      )
    }
  }
}

export default connect(null, actions)(App);
