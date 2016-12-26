import React from "react"
import RequestHelper from "../helpers/RequestHelper"
import Timeline from "../components/Timeline"
import CircularProgress from "material-ui/CircularProgress";


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
        	return <CircularProgress />
        }
    }
}

module.exports = TimelineContainer;
