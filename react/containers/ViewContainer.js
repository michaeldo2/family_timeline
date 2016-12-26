import TimelineContainer from "./TimelineContainer";
import React from "react"
import AppBar from "material-ui/AppBar";
import FlatButton from 'material-ui/FlatButton';

class ViewContainer extends React.Component {
    render() {
    	var timelineStyle = {
    		padding: '0 16px'
    	}

    	return (
	    	<div>
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
