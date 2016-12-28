import React from "react"
import EventContainer from "../containers/EventContainer"
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';

class YearEventList extends React.Component {

    constructor() {
        super()
        this.state= {
            showEvents: true
        }
    }

    toggleEvents() {
        this.setState({
            showEvents: !this.state.showEvents
        });
    }

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
            color: "white",
            fontSize: "32px"
        }
        var dotStyle = {
            backgroundColor: '#0097A7',
            position: 'absolute',
            width: '32px',
            height: '32px',
            transform: 'translateX(-80px)'
        }

        if (this.state.showEvents) {
        	return (
        		<Paper style={paperStyle}>
                    <Paper style={dotStyle} circle={true}/>
                    <FlatButton 
                        label={this.props.year}
                        labelStyle={labelStyle}
                        onTouchTap={this.toggleEvents.bind(this)}
                    />
                    <div style={listStyle}>
        			    {eventComponents}
                    </div>
        		</Paper>
        	);
        } else {
            return (
                <Paper style={paperStyle}>
                    <Paper style={dotStyle} circle={true}/>
                    <FlatButton 
                        label={this.props.year}
                        labelStyle={labelStyle}
                        onTouchTap={this.toggleEvents.bind(this)}
                    />
                </Paper>
            );
        }
    }
}

module.exports = YearEventList;