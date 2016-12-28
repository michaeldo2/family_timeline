import React from "react"
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import {createFamilyEvent} from '../helpers/RequestHelper';
import TextField from 'material-ui/TextField';


class FamilyEventForm extends React.Component {

	constructor() {
		super();
		this.state = {
			name: "",
			date: "",
			description: ""
		}
	}

	createNewEvent() {
	    var self = this;
	    createFamilyEvent(this.state.name, this.state.description, this.state.date)
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

  	saveDescription(event) {
  		this.setState({description: event.target.value})
  	}

  	saveDate(event) {
  		this.setState({date: event.target.value})
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
            		value = {this.state.date}
            		onChange = {this.saveDate.bind(this)}
          		/>
              <TextField
                hintText="Event Description"
                value = {this.state.description}
                onChange = {this.saveDescription.bind(this)}
                multiLine={true}
                rows={5}
                fullWidth={true}
              />
          	</div>
		);
	}
}

module.exports = FamilyEventForm;