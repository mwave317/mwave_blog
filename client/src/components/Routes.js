import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import AddPost from './AddPost';
import AddAbout from './AddAbout';


export default class Routes extends Component {
    constructor(props) {
        super(props);
            this.state = {
                path : this.name,
            }
    }
 
    render() {
        return (
            <div>
                <Route exact path="/" render={(props) => <Home {...props} title={this.props.title} body={this.props.body} date={this.props.date} onCommentSubmit={this.props.onCommentSubmit} />} />
                <Route path="/about" component={ About } />
                <Route path="/contact" render={(props) => <Contact {...props} onFormSubmit={this.props.onFormSubmit} /> }/>
                <Route path="/addpost" render={(props) => <AddPost {...props} addedTitle={this.props.addedTitle} addedBody={this.props.addedBody} date={this.props.date} onFormSubmit={this.props.onFormSubmit} />} />
                <Route path="/addabout" render={(props) => <AddAbout {...props} onFormSubmit={this.props.onFormSubmit} />} />
            </div>
        )
    }
}