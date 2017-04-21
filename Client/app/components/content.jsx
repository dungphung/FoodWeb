var React = require('react');
var Suggestion = require('suggestion');
var {connect} = require('react-redux');
var actions = require('actions');

var Content = React.createClass({

    render: function() {
        var {dispatch, login} = this.props;
        var loadContent = function() {
            if (login.isLogin) {
                return (
                    <h1>Dang nhap thanh cong</h1>
                )
            } else {
                return (
                    < Suggestion />
                )
            }
        }
        return (
            <div>
                {loadContent()}
            </div>
        )
    }
});


module.exports = connect(
    (state) => {
        return state;
    }
)(Content);