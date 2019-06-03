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

    testing(test) {
        console.log(test);
    }

    archivedMonths = () => {
        let date = new Date();
        let whatWasOneMonthAgo = date.getMonth()-1;
        let whatWasTwoMonthsAgo = date.getMonth()-2;
        let whatWasThreeMonthsAgo = date.getMonth()-3;
        let oneMonthAgo = this.state.months[whatWasOneMonthAgo];
        let twoMonthsAgo = this.state.months[whatWasTwoMonthsAgo];
        let threeMonthsAgo = this.state.months[whatWasThreeMonthsAgo];
        return(
            <div className="archives-past">
               <p className="archives-month" onClick ={ () => this.testing(whatWasOneMonthAgo)}>{oneMonthAgo}</p>
               <p className="archives-month" onClick={() => this.testing(whatWasTwoMonthsAgo)}>{twoMonthsAgo}</p>
               <p className="archives-month" onClick={() => this.testing(whatWasThreeMonthsAgo)}>{threeMonthsAgo}</p>
           </div>
        )

    }

    render() {       
        return (
            <div>
            <h4 className="archives">Archives</h4>
           <div className="archives-past">
              {this.archivedMonths()}
           </div>
        </div>
        )
    }
}