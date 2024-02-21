import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import App from "./App";

function Main() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/">
                    <App />
                </Route>
            </Switch>
        </Router>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>,
    document.getElementById("root")
);
