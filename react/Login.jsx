import React from "react";
import { render } from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AuthContainer from "./containers/AuthContainer";


class Login extends React.Component {

	componentWillMount() {
		injectTapEventPlugin();
	}

    render() {
        return (
        	<MuiThemeProvider>
            	<AuthContainer/>
            </MuiThemeProvider>
        )
    }
}

render(<Login/>, document.getElementById('Login'));