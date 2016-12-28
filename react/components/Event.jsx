import React from "react"
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

class Event extends React.Component {

    render() {

    	var color;

    	if (this.props.entry_type === 'FAMILY_EVENT') {
    		color = '#BBDEFB'
    	} else if (this.props.entry_type === 'HISTORICAL_EVENT') {
    		color = '#FFCDD2'
    	} else if (this.props.entry_type === 'TIMELINE_STORY') {
    		color = 'FFF9C4'
    	}

    	var style = {
    		backgroundColor: color
    	}

    	return (
			<Card>
			    <CardHeader
					title={this.props.name}
					subtitle={this.props.date}
					actAsExpander={true}
					showExpandableButton={true}
					style={style}
			    />
			    <CardText expandable={true}>
			      	{this.props.description}
			    </CardText>
			</Card>
    	);
    }
}

module.exports = Event;