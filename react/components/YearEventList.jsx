import React from "react"
import EventContainer from "../containers/EventContainer"
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';

class YearEventList extends React.Component {

    render() {
    	var events = this.props.events;
    	var eventComponents = [];
        eventComponents = this.props.events.map(function(event, index) {
            return (<EventContainer 
                        key={index}
                        event={event}
                        publisher={event.publisher.first_name}
                    />);
        })

        var listStyle = {
            paddingLeft: "32px"
        }

        var paperStyle = {
            margin: "16px",
            backgroundColor: "#00BCD4"
        }
        var labelStyle = {
            color: "white"
        }
    	return (
    		<Paper style={paperStyle}>
                <FlatButton 
                    label={this.props.year}
                    labelStyle={labelStyle}
                />
                <div style={listStyle}>
    			    {eventComponents}
                </div>
    		</Paper>
    	);
    }
}

module.exports = YearEventList;