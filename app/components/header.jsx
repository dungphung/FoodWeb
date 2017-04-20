var React = require('react');
var {Link} = require('react-router');
var {connect} = require('react-redux')
var Nav = require('Navbar');

var Header = React.createClass({
    render: function() {
        var {button} = this.props;
        return (
            <header className={button === 0 ? "header-main" : "header-main-2"}>
                <Nav />
                <div className="hero-text-box">
                        {() =>{ return button === 0 ? (<h1>Còn trẻ mà không đi đó đi đây<br/> thì bạn định chờ đến bao giờ nữa.</h1>) : ""}}
                </div>
            </header>
        )
    }
})

module.exports = connect(
    (state) => {
        return state;
    }
)(Header);