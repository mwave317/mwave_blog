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

    // getArchivedDate(month, year) {
    //     if (month < 10) {
    //         month = "0" + month;
    //         console.log(month);
    //     }

    //     let start_date = year + "-" + month + "-" + "01";
    //     let end_date = year + "-" + month + "-" + "31";
    //     console.log(start_date);
    //     console.log(end_date);
    //     return start_date, end_date; 
    // }

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
            <div>
            <h4 className="archives">Archives</h4>
           <div className="archives-past">
              {this.archivedMonths()}
           </div>
        </div>
        )
    }
}