import React, { Component } from 'react';
import '../css/AddAbout.css';
import axios from 'axios';

import { connect } from 'react-redux';
import * as actions from '../actions';


class AddAbout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
        }
    }

    componentDidMount() {
        this.props.fetchAbout();
    }

    handleChange(state, ev) {
        if (ev.target.value.includes('<script>')) {
            this.setState({ body: ''})
        } else {
            this.setState({ [state] : ev.target.value});
        }
    }

    updateAbout() {
        axios.patch('/api/about/update', {
            aboutId: this.props.about[0]._id,
            body: this.state.body,
        })
    }

    submitForm = (event) => {
        event.preventDefault();
        this.setState({body: event.target.value});
        if(this.props.about.length > 0) {
         this.updateAbout();
        } else {
            axios.post('/api/about/add', {
                body: this.state.body,
            });
        }  
    }

    render() {
        return (
            <div className="addAbout">
                
                <form>
                <h2 className="addAbout-title">Add About</h2>
        
                    <textarea className="addAbout-body" onChange= { ev => this.handleChange ('body', ev)}
                    type='text' placeholder='Body' value= {this.state.body } />
                   
                    <button type="submit" onClick={this.submitForm} className="addAbout-button">Submit</button>
                </form>
            </div>
            
        );
    }
}

function mapStateToProps({ about }) {
    return { about };
  }
  
  export default connect(mapStateToProps, actions)(AddAbout);

