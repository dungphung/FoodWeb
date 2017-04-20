var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var {Provider} = require('react-redux');

//Components
var Main = require('Main');
var Content = require('content');
var store = require('configureStore').configure();
var Login = require('Login');
var Signup = require('Signup');


// Load foundation
// add all features of foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={Content} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById("app")
)