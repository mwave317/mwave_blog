import React, { Component } from 'react';
import '../css/Contact.css';


export default class Contact extends Component {
    constructor() {
        super();
        this.state = {
            sender: '',
            subject: '',
            contactBody: '',
        };
    }

    handleChange(state, event) {
        if (event.target.value.includes('<script>')) {
            this.setState({sender: '', subject: '', contactBody: ''})
        } else {
            this.setState({ [state] : event.target.value});
        }
    }

    submitForm = (event) => {
        event.preventDefault();
        this.setState({sender: event.target.value, subject: event.target.value, contactBody: event.target.value});
        this.props.onFormSubmit(this.state);
    }

    render() {
        return (
            <div>
                
            <div className="contact">
                <h1 className="contact-title">Contact: </h1>

                    <form>
                        <input className="contact-sender" onChange= { ev => this.handleChange ('sender', ev)}
                        type='text' placeholder='E-mail' value= {this.state.sender } />

                        <input className="contact-subject" onChange= { ev => this.handleChange ('subject', ev)}
                        type='text' placeholder='Subject' value= {this.state.subject } />

                        <textarea className="contact-body" onChange= { ev => this.handleChange ('contactBody', ev)}
                        type='text' placeholder='Body' value= {this.state.contactBody } />

                        <button type="submit" onClick={this.submitForm} className="contact-button">Submit</button>
                    </form>
            </div>
            </div>
           
        );
    }
}