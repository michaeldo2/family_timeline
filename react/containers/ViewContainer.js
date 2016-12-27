import TimelineContainer from "./TimelineContainer";
import React from "react"
import AppBar from "material-ui/AppBar";
import AddEventContainer from "./AddEventContainer"
import RequestHelper from "../helpers/RequestHelper"
import Paper from "material-ui/Paper";


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
    		paddingLeft: '104px'
    	}
    	var lineStyle = {
    		height: '100%',
    		width: '8px',
    		position: 'fixed',
    		transform: 'translateX(52px)',
    		backgroundColor: '#0097A7'

    	}

    	return (
	    	<div>
	    		<Paper style={lineStyle} zDepth={2}/>
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
