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
                return <a href="/api/logout">Logout {this.props.auth.firstName}</a>
        }
    }
    render() {
        return (
            <div>
                 <h1 className="title"> My journey in coding</h1>
                    <ul className="header-ul">
                        <li className="header-li"><Link to={'/' }
                className="header-logo">mwave317
                </Link></li>
                <li className="header-li">{this.renderContent()}</li>
                    </ul>       
                <header className="main-header"></header>
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);


