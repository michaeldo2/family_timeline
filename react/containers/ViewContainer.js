import TimelineContainer from "./TimelineContainer";
import React from "react"
import AppBar from "material-ui/AppBar";
import AddEventContainer from "./AddEventContainer"
import RequestHelper from "../helpers/RequestHelper"


class ViewContainer extends React.Component {

	constructor() {
		super()
		this.state = {
			events: {}
		}
	}

	componentWillMount() {
		this.updateTimelineEvents();
	}

	updateTimelineEvents() {
		var self = this;
		RequestHelper.getTimelineEvents().then(function (response) {
			console.log(response)
			if (response.data) {
				self.setState({
					events: response.data || {}
				});
			}
		})
	}

    render() {
    	var timelineStyle = {
    		padding: '0 16px'
    	}

    	return (
	    	<div>
	    		<AppBar 
	    			title="Family Timeline"
	    			iconElementRight={<AddEventContainer updateTimelineEvents={this.updateTimelineEvents.bind(this)}/>}
	    			
	    		/>

	    		<div style={timelineStyle}>
	    			<TimelineContainer events={this.state.events}/>
	    		</div>
	    	</div>
	    );
    }
}

module.exports = ViewContainer;
