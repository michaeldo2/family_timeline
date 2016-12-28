import React from "react"
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import {createHistoricalEvent} from '../helpers/RequestHelper';
import TextField from 'material-ui/TextField';


class HistoricalEventForm extends React.Component {

	constructor() {
		super();
		this.state = {
			name: "",
			year: "",
		}
	}

	createNewEvent() {
	    var self = this;
	    createHistoricalEvent(this.state.name, this.state.year)
	    .then(function (response) {
	      self.props.updateTimelineEvents();
	      self.props.notifyEventStatus(true);
	    })
	    .catch(function(error) {
	      self.props.notifyEventStatus(false);
	      console.log(error)
	    });
	    this.props.handleClose();
  	}

  	saveName(event) {
  		this.setState({name: event.target.value})
  	}

  	saveYear(event) {
  		this.setState({year: event.target.value})
  	}

	render() {
		return (
			<div>
          		<TextField
            		hintText="Name"
            		value = {this.state.name}
            		onChange = {this.saveName.bind(this)}
          		/><br/>
          		<TextField
            		hintText="Year"
            		value = {this.state.year}
            		onChange = {this.saveYear.bind(this)}
          		/>

          	</div>
		);
	}
}

module.exports = HistoricalEventForm;