import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/Header.css';

import { Link } from 'react-router-dom';
import '../components/Routes';

class Header extends Component {
    
    renderContent() {
        switch (this.props.auth) {
            case null:
                return 'Nothing is being returned';
            case false: 
                return   <a
                className="App-link"
                href="/auth/google"
                target="_blank"
                rel="noopener noreferrer"
            >Sign in with Google</a>
            default: 
                return <a href="/api/logout">LogOut</a>
        }
    }
    render() {
        console.log(this.props);
        // console.log(this.props.auth.firstName);
        return (
            <div>
                 <h1 className="title"> My journey in coding</h1>
                <Link to={this.props.auth ? '/home' : '/' }
                className="header-logo">mwave317
                </Link>
                <p>{this.renderContent()}</p>

               
                <header className="main-header"></header>
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);


