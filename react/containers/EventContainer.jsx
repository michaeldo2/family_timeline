import React from "react"
import Event from "../components/Event"


class EventContainer extends React.Component {

    render() {
    	var event = this.props.event;
    	return (
    		<div>
    			<Event entry_type={event.entry_type} id={event.id} name={event.name} date={event.date} description={event.description} publisher={this.props.publisher} />
    		</div>
    	);
    }
}

module.exports = EventContainer;
