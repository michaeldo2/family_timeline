import React from "react"
import YearEventList from "../components/YearEventList"

class Timeline extends React.Component {

    render() {
    	var events = this.props.events;
    	var yearEventComponents = [];
        Object.keys(events).forEach(function(year, index) {
            yearEventComponents.push(<YearEventList year={year} events={events[year]} key={index}/>);
        });
    	return (
    		<div>
    			{yearEventComponents}
    		</div>
    	);
    }
}

module.exports = Timeline;