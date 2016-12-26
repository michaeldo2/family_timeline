import React from "react"
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

class Event extends React.Component {

    render() {
    	return (
    		<div onClick={this.props.toggleDetails}>
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
    		</div>
    	);
    }
}

module.exports = Event;