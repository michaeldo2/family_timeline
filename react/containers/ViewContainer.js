import TimelineContainer from "./TimelineContainer";
import React from "react"
import AppBar from "material-ui/AppBar";
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

class ViewContainer extends React.Component {
    render() {
    	var timelineStyle = {
    		padding: '0 48px'
    	}
    	var lineStyle = {
    		height: '100%',
    		width: '5px',
    		position: 'fixed',
    		left: '32px',
    		backgroundColor: '#0097A7'

    	}

    	return (
	    	<div>
	    		<Paper style={lineStyle} zDepth={2}/>
	    		<AppBar 
	    			title="Family Timeline"
	    			iconElementRight={<FlatButton label="New Event" />}
	    		/>
	    		<div style={timelineStyle}>
	    			<TimelineContainer />
	    		</div>
	    	</div>
	    );
    }
}

module.exports = ViewContainer;
