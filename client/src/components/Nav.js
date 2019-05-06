
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Nav.css';
import '../css/Media.css';


export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active : false,
        }
    }

    toggleClass = () => {
        this.setState({active: !this.state.active});
    }

    render() {
        const toggleActiveState = this.state.active ? 'show' : 'hide';
        return (
            <div className="nav">
                 <div onClick={this.toggleClass}>
                        <div className="nav-hamburger__line"></div>
                        <div className="nav-hamburger__line"></div>
                        <div className="nav-hamburger__line"></div>
                 </div>
                 <div className={toggleActiveState}>
                    <Link className="nav-link" to="/home">Home</Link>
                    <Link className="nav-link" to="/about">About</Link>
                    <Link className="nav-link" to="/contact">Contact</Link>
                    <Link className="nav-link" to="/addpost">AddPost</Link>
                 </div>       
            </div>
        )
    }
}