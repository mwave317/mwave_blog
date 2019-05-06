import React, { Component } from 'react';
import '../css/AddPost.css';


export default class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            category: '',
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
        this.setState({title: event.target.value, body: event.target.value});
        this.props.onFormSubmit(this.state);
    }

    render() {
        console.log('This is the props from the AddPost', this.props);
        console.log('This is state', this.state);
        return (
            <div className="addPost">
                
                <form>
                <h2 className="addPost-title">Add Post</h2>
                    <input className="addPost-heading" onChange= { ev => this.handleChange ('title', ev)}
                    type='text' placeholder='Title' value= {this.state.title } />

                    <textarea className="addPost-body" onChange= { ev => this.handleChange ('body', ev)}
                    type='text' placeholder='Body.' value= {this.state.body } />

                    <button type="submit" onClick={this.submitForm} className="addPost-button">Submit</button>
                    {/* <div>
                        <label>Choose a category:</label>
                        <select value={this.state.category} onChange={ev => this.handleChange ('category', ev)}>
                            <option value="javascript">JavaScript</option>
                            <option value="react">React</option>
                            <option value="angular">Angular</option>
                            <option value="mongodb">Mongo DB</option>
                        </select>
                    </div> */}
                </form>
            </div>
            
        );
    }
}