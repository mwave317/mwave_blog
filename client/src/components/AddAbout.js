import React, { Component } from 'react';
import '../css/AddAbout.css';
import axios from 'axios';


export default class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
        }
    }

    handleChange(state, ev) {
        if (ev.target.value.includes('<script>')) {
            this.setState({ body: ''})
        } else {
            this.setState({ [state] : ev.target.value});
        }
    }

    submitForm = (event) => {
        event.preventDefault();
        this.setState({body: event.target.value});

        axios.post('/api/about/add', {
            body: this.state.body,
        });
    }

    render() {
        return (
            <div className="addAbout">
                
                <form>
                <h2 className="addAbout-title">Add About</h2>
        
                    <textarea className="addAbout-body" onChange= { ev => this.handleChange ('body', ev)}
                    type='text' placeholder='Body.' value= {this.state.body } />
                   
                    <button type="submit" onClick={this.submitForm} className="addAbout-button">Submit</button>
                </form>
            </div>
            
        );
    }
}