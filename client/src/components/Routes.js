import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Landing from './Landing';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import AddPost from './AddPost';



export default class Routes extends Component {
    constructor(props) {
        super(props);
            this.state = {
                path : this.name,
            }
    }
 
    render() {
        // console.log(this.props);
        // console.log(this.state.path);
        return (

            <div>
                <Route exact path="/" component={ Landing} />
                <Route path="/home" render={(props) => <Home {...props} title={this.props.title} body={this.props.body} onCommentSubmit={this.props.onCommentSubmit} />} />
                <Route path="/about" component={ About } />
                <Route path="/contact" component={ Contact } />
                <Route path="/portfolio" component={ Portfolio } />
                <Route path="/addPost" render={(props) => <AddPost {...props} addedTitle={this.props.addedTitle} addedBody={this.props.addedBody} onFormSubmit={this.props.onFormSubmit} />} />
            </div>
        )
    }
}