import React from "react"
import RequestHelper from "../helpers/RequestHelper"
import Timeline from "../components/Timeline"


class TimelineContainer extends React.Component {

	constructor() {
		super();
		this.state = {
			events: []
		}
	}

	componentWillMount() {
		var self = this;
		RequestHelper.getTimelineEvents().then(function (response) {
			console.log(response.data);
			if (response.data) {
				self.setState({
					events: response.data
				});
			}
		})
		
	}

    render() {
    	if (this.state.events.length) {
        	return (<Timeline events={this.state.events} />);
        } else {
        	return (<div> No Events! </div>);
        }
    }
}

module.exports = TimelineContainer;
