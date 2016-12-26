import React from "react";
import { render } from "react-dom";
import ViewContainer from "./containers/ViewContainer"
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";


class App extends React.Component {

	componentWillMount() {
		injectTapEventPlugin();
	}

    render() {
        return (
        	<MuiThemeProvider>
            	<ViewContainer />
            </MuiThemeProvider>
        )
    }
}

render(<App/>, document.getElementById('App'));