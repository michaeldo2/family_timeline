import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {getCSRFToken, requestLogin} from '../helpers/RequestHelper';
import AuthForm from '../components/AuthForm';
import Dialog from 'material-ui/Dialog';


export default class AuthContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      userName: '',
      password: ''
    }
  }


  saveUserName = (event) => {
    this.setState({userName: event.target.value})
  }

  savePassword = (event) => {
    this.setState({password: event.target.value})
  }

  login = () => {
    requestLogin(this.state.userName, this.state.password)
    .then(function (response) {
      window.location.href = '/';
    })
    .catch(function (error) {

    });
  }

  render() {
    const actions = [
      <FlatButton
        label="Sign up"
        primary={true}
        onTouchTap={this.login}
      />,
      <FlatButton
        label="Log in"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.login}
      />,
    ];

    return (
      <Dialog
          title="Log in or Sign up to access your Timeline"
          actions={actions}
          modal={true}
          open={true}
        >
      <AuthForm
        saveUserName={this.saveUserName}
        savePassword={this.savePassword}
      />
      </Dialog>
    );
  }
}
