import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Reply extends Component {
    constructor(props) {
        super(props);
            this.state = {
                reply: '',
                firstName: '',
                _comment : '5cdb0cc9bed54f496830ea0d',
                _post : '5cd7931f3fadb2277a443286',
                _user : '5cd1d33ff90369044bb357c0',
            }
    }


    handleChange(state, ev) {
        if (ev.target.value.includes('<script>')) {
            this.setState({reply: ''})
        } else {
            this.setState({ [state] : ev.target.value});
        }
    }

    submitReply = () => { 
        console.log(this.props.auth.firstName);
        axios.post('/api/reply/add', {
            reply: this.state.reply,
            firstName: this.props.auth.firstName,
            timestamp: this.props.date,
            _user: this.state._user,
            _post: this.state._post,
            _comment: this.state._comment,
        });

        this.setState({ reply : ''});
    };

    render() {
        console.log(this.props.auth)
        return(
            <div>
                  <div>
                    <textarea onChange= { ev => this.handleChange ('reply', ev)}
                     type='text' placeholder='Enter your reply here...' value= {this.state.reply} />
                     <button type="submit" onClick={this.submitReply} className="addPost-button">Submit</button>
                  </div>
            </div>
        )
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, actions)(Reply);