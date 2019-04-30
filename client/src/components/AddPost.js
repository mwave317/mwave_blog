import React, { Component } from 'react';
import '../css/AddPost.css';


export default class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
        }
    }


    handleChange(state, ev) {
        if (ev.target.value.includes('<script>')) {
            this.setState({title: '', body: ''})
        } else {
            this.setState({ [state] : ev.target.value});
        }
    }

    submitForm = (event, state) => {
        event.preventDefault();
        this.setState({title: event.target.value, body: event.target.value});
        this.props.onFormSubmit(this.state);
    }

    render() {
        return (
            <div className="addPost">
                <form>
                    <input className="addPost-title" onChange= { ev => this.handleChange ('title', ev)}
                    type='text' placeholder='Catching title' value= {this.state.title } />

                    <textarea className="addPost-body" onChange= { ev => this.handleChange ('body', ev)}
                    type='text' placeholder='Write something moving and informative.' value= {this.state.body } />

                    <button type="submit" onClick={this.submitForm} className="addPost-button">Submit</button>
                </form>
            </div>
            
        );
    }
}