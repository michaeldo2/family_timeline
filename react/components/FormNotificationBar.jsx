import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';

export default class FormNotificationBar extends React.Component {

  render() {
    return (
      <div>
        <Snackbar
          open={this.props.open}
          message={this.props.message}
          autoHideDuration={4000}
          onRequestClose={this.props.onRequestClose}
          contentStyle={this.props.style}
        />
      </div>
    );
  }
}