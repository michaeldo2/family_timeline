import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Settings from 'material-ui/svg-icons/action/settings';
import React from 'react';


export default class MenuOptionsIcon extends React.Component {

	logout() {
		window.location.href = "/logout";
	}

	render() {
		return (
		  <IconMenu
		    iconButtonElement={<IconButton><Settings /></IconButton>}
		    anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
		    targetOrigin={{horizontal: 'left', vertical: 'top'}}
		    maxHeight={272}
		  >
		  	<MenuItem primaryText="Logout" onTouchTap={this.logout.bind(this)} />

		  </IconMenu>
		);
	}
}