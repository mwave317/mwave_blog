import React, { Component } from 'react';
import '../css/Archives.css'

export default class Archives extends Component {
    constructor(props) {
        super(props);
            this.state = {

            }
        
    }

    render() {
        return (
            <div>
            <h3 className="archives">Archives</h3>
           <div className="archives-past">
               <p className="archives-month">Feburary</p>
               <p className="archives-month">January</p>
               <p className="archives-month">December</p>
           </div>
        </div>
        )
    }
}