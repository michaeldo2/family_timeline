import React from "react"
import { render } from "react-dom"
import TimelineContainer from "./containers/TimelineContainer"

class App extends React.Component {
    render() {
        return (
            <TimelineContainer />
        )
    }
}

render(<App/>, document.getElementById('App'));