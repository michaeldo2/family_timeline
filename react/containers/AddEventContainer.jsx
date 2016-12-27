import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import AddEventForm from '../components/AddEventForm';
import {createEvent} from '../helpers/RequestHelper';
import FormNotificationBar from '../components/FormNotificationBar';

const SUCCESS_NOTIFICATION_STYLE = {
  color: 'white'
}

const ERROR_NOTIFICATION_STYLE = {
  color: '#F44336'
}

export default class AddEventContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      notificationOpen: false,
      notificationMessage: "",
      notificationStyle: {},
      open: false,
      name: "",
      description: "",
      year: ""
    }
  }

  createNewEvent() {
    var self = this;
    createEvent(this.state.name, this.state.description, this.state.year)
    .then(function (response) {
      self.props.updateTimelineEvents();
      self.notifyEventStatus(true);
    })
    .catch(function(error) {
      self.notifyEventStatus(false);
      console.log(error)
    });
    this.handleClose();
  }

  notifyEventStatus(success) {
    if (success) {
      this.setState({
        notificationOpen: true,
        notificationMessage: "Event Successfully Saved!",
        notificationStyle: SUCCESS_NOTIFICATION_STYLE
      });
    } else {
      this.setState({
        notificationOpen: true,
        notificationMessage: "Error While Saving Event.",
        notificationStyle: ERROR_NOTIFICATION_STYLE
      });
    }
  }

  onCloseNotification() {
    this.setState({
      notificationOpen: false
    })
  }

  saveName(event) {
    this.setState({name: event.target.value})
  }

  saveDescription(event) {
    this.setState({description: event.target.value})
  }

  saveYear(event) {
    this.setState({year: event.target.value})
  }


  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Save"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.createNewEvent.bind(this)}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Add Event" onTouchTap={this.handleOpen} />
        <Dialog
          title="Enter your event here"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <AddEventForm
            saveName = {this.saveName.bind(this)}
            saveDescription = {this.saveDescription.bind(this)}
            saveYear = {this.saveYear.bind(this)}
            name = {this.state.name}
            description = {this.state.description}
            year = {this.state.year}
          />
        </Dialog>
        <FormNotificationBar
            open={this.state.notificationOpen}
            message={this.state.notificationMessage}
            onRequestClose={this.onCloseNotification.bind(this)}
            style={this.state.notificationStyle}
          />
      </div>
    );
  }
}