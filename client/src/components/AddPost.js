import React, { Component } from 'react';
import '../css/AddPost.css';
import axios from 'axios';


export default class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            postedOn: '',
        }
    }

    handleChange(state, ev) {
        if (ev.target.value.includes('<script>')) {
            this.setState({title: '', body: '', category: ''})
        } else {
            this.setState({ [state] : ev.target.value});
        }
    }

    submitForm = (event) => {
        event.preventDefault();
        this.setState({title: event.target.value, body: event.target.value, category: event.target.value});

        axios.post('/api/posts/add', {
            title: this.state.title, 
            body: this.state.body,
            postedOn: this.props.date,
        });
    }



    render() {
        return (
            <div className="addPost">
                
                <form>
                <h2 className="addPost-title">Add Post</h2>
                    <input className="addPost-heading" onChange= { ev => this.handleChange ('title', ev)}
                    type='text' placeholder='Title' value= {this.state.title } />

                    <textarea className="addPost-body" onChange= { ev => this.handleChange ('body', ev)}
                    type='text' placeholder='Body.' value= {this.state.body } />
                    
                    <button type="submit" onClick={this.submitForm} className="addPost-button">Submit</button>
                </form>
            </div>
            
        );
    }
}