import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import FamilyEventForm from '../components/FamilyEventForm';
import HistoricalEventForm from '../components/HistoricalEventForm';
import TimelineStoryForm from '../components/TimelineStoryForm';
import FormNotificationBar from '../components/FormNotificationBar';
import {Tabs, Tab} from 'material-ui/Tabs';


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
      slideIndex: 0
    }
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

  createEventType() {
    if (this.state.slideIndex === 0) {
      this.refs.familyevent.createNewEvent();
    }
    else if (this.state.slideIndex === 1) {
      this.refs.historicalevent.createNewEvent();
    }
    else if (this.state.slideIndex === 2) {
      this.refs.timelinestory.createNewEvent();
    }
  }

  onCloseNotification() {
    this.setState({
      notificationOpen: false
    })
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleTabChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    var dialogContentStyle = {
      overflowY: 'scroll'
    }

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
        onTouchTap={this.createEventType.bind(this)}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Add Event" onTouchTap={this.handleOpen} />
        <Dialog
          title="Enter your event here"
          actions={actions}
          modal={true}
          open={this.state.open}
          onRequestClose={this.handleClose}
          bodyStyle={dialogContentStyle}
        >
          <Tabs
            value={this.state.value}
            onChange={this.handleTabChange}
          >
            <Tab label="Family Event" value={0} >
              <FamilyEventForm
                ref="familyevent"
                notifyEventStatus={this.notifyEventStatus.bind(this)}
                updateTimelineEvents={this.props.updateTimelineEvents}
                handleClose={this.handleClose.bind(this)}
              />
            </Tab>
            <Tab label="Historical Event" value={1}>
              <HistoricalEventForm
                ref="historicalevent"
                notifyEventStatus={this.notifyEventStatus.bind(this)}
                updateTimelineEvents={this.props.updateTimelineEvents}
                handleClose={this.handleClose.bind(this)}
              />
            </Tab>
            <Tab label="Timeline Story" value={2}>
              <TimelineStoryForm
                ref="timelinestory"
                notifyEventStatus={this.notifyEventStatus.bind(this)}
                updateTimelineEvents={this.props.updateTimelineEvents}
                handleClose={this.handleClose.bind(this)}
              />
            </Tab>
          </Tabs>
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