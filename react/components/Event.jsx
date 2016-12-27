import React from "react"
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

class Event extends React.Component {

    render() {
    	return (
			<Card>
			    <CardHeader
					title={this.props.name}
					subtitle={this.props.date}
					actAsExpander={true}
					showExpandableButton={true}
			    />
			    <CardText expandable={true}>
			      	{this.props.description}
			    </CardText>
			</Card>
    	);
    }
}

module.exports = Event;