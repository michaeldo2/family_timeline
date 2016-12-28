import React from "react"
import TextField from 'material-ui/TextField';


class AuthForm extends React.Component {
	render() {
		return (
			<div>
    		<TextField
      		hintText="Username"
      		value = {this.props.username}
          onChange={this.props.saveUserName}
    		/><br/>
    		<TextField
      		hintText="Password"
      		value = {this.props.password}
          onChange={this.props.savePassword}
          type="password"
    		/>
    	</div>
		);
	}
}

module.exports = AuthForm;