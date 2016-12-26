import TimelineContainer from "./TimelineContainer";
import React from "react"
import AppBar from "material-ui/AppBar";
import FlatButton from 'material-ui/FlatButton';

class ViewContainer extends React.Component {
    render() {
    	return (
	    	<div>
	    		<AppBar 
	    			title="Family Timeline"
	    			iconElementRight={<FlatButton label="New Event" />}
	    			
	    		/>
	    		<TimelineContainer />
	    	</div>
	    );
    }
}

module.exports = ViewContainer;
