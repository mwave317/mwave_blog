import React, { Component, Fragment } from 'react';
import '../css/About.css';
import '../css/Media.css';

import { connect } from 'react-redux';
import * as actions from '../actions';

class About extends Component {
    constructor() {
        super();
        this.state = {
            body: '',
        }
    }

    componentDidMount() {
      this.props.fetchAbout();
    }

    getAbout() {
            return this.props.about.map(about => {
                return(
                    <div key={about._id} className="about">
                    <h4 className="about-title">About</h4>
                        <p className="about-body">{about.body}</p>
                    </div>
                )
            })
    }

    render() {
        return (
            <Fragment className="about"> 
                <div className="about-body">{this.getAbout()}</div>
            </Fragment>
        )
    }
}

function mapStateToProps({ about }) {
    return { about };
  }
  
  export default connect(mapStateToProps, actions)(About);