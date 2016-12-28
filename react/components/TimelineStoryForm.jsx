import React from "react"
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import {createTimelineStory} from '../helpers/RequestHelper';
import TextField from 'material-ui/TextField';


class TimelineStoryForm extends React.Component {

	constructor() {
		super();
		this.state = {
			name: "",
			timeline_story_description: "",
			year: ""
		}
	}

	createNewEvent() {
	    var self = this;
	    createTimelineStory(this.state.name, this.state.timeline_story_description, this.state.year)
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

  	saveTimelineStoryDescription(event) {
  		this.setState({timeline_story_description: event.target.value})
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
              <TextField
                hintText="Timeline Story Description"
                value = {this.state.timeline_story_description}
                onChange = {this.saveTimelineStoryDescription.bind(this)}
                multiLine={true}
                rows={5}
                fullWidth={true}
              />
          	</div>
		);
	}
}

module.exports = TimelineStoryForm;