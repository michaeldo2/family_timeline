import React from "react"
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Group from 'material-ui/svg-icons/social/group';
import Globe from 'material-ui/svg-icons/social/public';
import LocalLibrary from 'material-ui/svg-icons/maps/local-library';
import Avatar from 'material-ui/Avatar';

class Event extends React.Component {

    render() {

    	var color;
    	var Icon;

    	if (this.props.entry_type === 'FAMILY_EVENT') {
    		color = '#BBDEFB';
    		Icon = Group;
    	} else if (this.props.entry_type === 'HISTORICAL_EVENT') {
    		color = '#FFCDD2';
    		Icon = Globe;
    	} else if (this.props.entry_type === 'TIMELINE_STORY') {
    		color = 'FFF9C4';
    		Icon = LocalLibrary;
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
					avatar={
						<Avatar 
							icon={<Icon />}
						/>
					}
			    />
			    <CardText expandable={true}>
			      	{this.props.description}
			    </CardText>
			</Card>
    	);
    }
}

module.exports = Event;