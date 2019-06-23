import React, { Component } from 'react';
import '../css/Archives.css'

export default class Archives extends Component {
    constructor(props) {
        super(props);
            this.state = {
                months: ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"],
            }
        
    }

    archivedMonths = () => {
        let date = new Date();
        let year = date.getFullYear();
        let whatWasOneMonthAgo = date.getMonth()-1;
        let whatWasTwoMonthsAgo = date.getMonth()-2;
        let whatWasThreeMonthsAgo = date.getMonth()-3;
        let oneMonthAgo = this.state.months[whatWasOneMonthAgo];
        let twoMonthsAgo = this.state.months[whatWasTwoMonthsAgo];
        let threeMonthsAgo = this.state.months[whatWasThreeMonthsAgo];
        return(
            <div className="archives-past">
               <p className="archives-month" onClick ={ () => this.props.getArchivedDate(whatWasOneMonthAgo, year)}>{oneMonthAgo}</p>
               <p className="archives-month" onClick={() => this.props.getArchivedDate(whatWasTwoMonthsAgo, year)}>{twoMonthsAgo}</p>
               <p className="archives-month" onClick={() => this.props.getArchivedDate(whatWasThreeMonthsAgo, year)}>{threeMonthsAgo}</p>
           </div>
        )

    }

    render() {       
        return (
            <div className="archives-past">
                <h4 className="archives">Archives</h4>
                    {this.archivedMonths()}
            </div>
        )
    }
}