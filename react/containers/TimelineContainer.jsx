import React from "react"
import Timeline from "../components/Timeline"
import CircularProgress from "material-ui/CircularProgress";


class TimelineContainer extends React.Component {

    render() {
    	if (Object.keys(this.props.events).length) {
        	return (<Timeline events={this.props.events} />);
        } else {
        	return <CircularProgress />
        }
    }
}

module.exports = TimelineContainer;
