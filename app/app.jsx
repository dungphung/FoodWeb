var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var {Provider} = require('react-redux');



// Load foundation
// add all features of foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <p>Hello React Redux</p>,
    document.getElementById("app")
)