import TimelineContainer from "./TimelineContainer";
import React from "react"
import AppBar from "material-ui/AppBar";
import AddEventContainer from "./AddEventContainer"


class ViewContainer extends React.Component {
    render() {
    	var timelineStyle = {
    		padding: '0 16px'
    	}

    	return (
	    	<div>
	    		<AppBar 
	    			title="Family Timeline"
	    			iconElementRight={<AddEventContainer/>}
	    			
	    		/>

	    		<div style={timelineStyle}>
	    			<TimelineContainer />
	    		</div>
	    	</div>
	    );
    }
}

module.exports = ViewContainer;
