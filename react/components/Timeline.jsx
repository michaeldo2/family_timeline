import React from "react"
import EventContainer from "../containers/EventContainer"

class Timeline extends React.Component {

    render() {
    	var events = this.props.events;
    	var eventComponents = events.map(function(event, index) {
    		return (<EventContainer event={event} key={index} />);
    	});
    	return (
    		<div>
    			{eventComponents}
    		</div>
    	);
    }
}

module.exports = Timeline;