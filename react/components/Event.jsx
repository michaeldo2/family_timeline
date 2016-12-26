import React from "react"

class Event extends React.Component {

    render() {
    	return (
    		<div onClick={this.props.toggleDetails}>
    			{this.props.name}
                {this.props.date}
    		</div>
    	);
    }
}

module.exports = Event;