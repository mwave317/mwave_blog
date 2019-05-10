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
                _comment : '5cd47b688ead070ccf57de98',
                _post : '5cd40d103651bf0417046e28',
                _user : '5cd1d33ff90369044bb357c0',
            }
    }


    handleChange(state, ev) {
        if (ev.target.value.includes('<script>')) {
            this.setState({reply: ''})
        } else {
            this.setState({ firstName: this.props.auth.firstname })
            this.setState({ [state] : ev.target.value});
        }
    }

    submitReply = () => { 
        axios.post('/api/reply/add', {
            reply: this.state.reply,
            firstName: this.state.firstName,
            _user: this.state._user,
            _post: this.state._post,
            _comment: this.state._comment,
        });

        this.setState({ reply : ''});
    };

    render() {
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