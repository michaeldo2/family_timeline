import React from "react"
import RequestHelper from "../helpers/RequestHelper"
import Event from "../components/Event"


class EventContainer extends React.Component {

	constructor() {
		super();
		this.state = {
			showDetails: false
		}
	}

	toggleDetails() {
		this.setState({
			showDetails: !this.state.showDetails
		})
	}

    render() {
    	var event = this.props.event;
    	if (this.state.showDetails) {
        	return (
        		<div>
        			<Event id={event.id} name={event.name} date={event.date} toggleDetails={this.toggleDetails.bind(this)} />
        			<div> Details </div>
        		</div>
        	);
        } else {
        	return (
        		<div>
        			<Event id={event.id} name={event.name} date={event.date} toggleDetails={this.toggleDetails.bind(this)} />
        		</div>
        	);
        }
    }
}

module.exports = EventContainer;
