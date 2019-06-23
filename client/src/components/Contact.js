import React, { Component, Fragment } from 'react';
import '../css/Contact.css';
import axios from 'axios';


export default class Contact extends Component {
    constructor() {
        super();
        this.state = {
            sender: '',
            subject: '',
            body: '',
        };
    }

    handleChange(state, event) {
        if (event.target.value.includes('<script>')) {
            this.setState({sender: '', subject: '', body: ''})
        } else {
            this.setState({ [state] : event.target.value});
        }
    }

    submitForm = (event) => {
        event.preventDefault();
        this.setState({sender: event.target.value, subject: event.target.value, body: event.target.value});
        
        axios.post('/api/contact', {
            from: this.state.sender,
            subject: this.state.subject,
            body: this.state.body,
        });
    }

    render() {
        return (
            <Fragment>
                
            <div className="contact">
                <h1 className="contact-title">Contact: </h1>

                    <form>
                        <input className="contact-sender" onChange= { ev => this.handleChange ('sender', ev)}
                        type='text' placeholder='E-mail' value= {this.state.sender } />

                        <input className="contact-subject" onChange= { ev => this.handleChange ('subject', ev)}
                        type='text' placeholder='Subject' value= {this.state.subject } />

                        <textarea className="contact-body" onChange= { ev => this.handleChange ('body', ev)}
                        type='text' placeholder='Body' value= {this.state.body } />

                        <button type="submit" onClick={this.submitForm} className="contact-button">Submit</button>
                    </form>
            </div>
            </Fragment>
           
        );
    }
}