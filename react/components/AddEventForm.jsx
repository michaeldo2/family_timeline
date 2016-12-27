import React from "react"
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';


class AddEventForm extends React.Component {
	render() {
		return (
			<div>
          		<TextField
            		hintText="Name"
            		value = {this.props.name}
            		onChange = {this.props.saveName}
          		/><br/>
          		<TextField
            		hintText="Year"
            		value = {this.props.year}
            		onChange = {this.props.saveYear}
          		/>
              <TextField
                hintText="Event Description"
                value = {this.props.description}
                onChange = {this.props.saveDescription}
                multiLine={true}
                rows={5}
                fullWidth={true}
              />
          	</div>
		);
	}
}

module.exports = AddEventForm;