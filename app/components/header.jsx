var React = require('react');
var {Link} = require('react-router');

var Header = React.createClass({

    render: function() {
        return (
            <header className="header-main">
                <div className="row">
                    <img src="resources/img/logo2.png" alt="logo" className="logo"/>
                    <ul className="main-nav">
                        <li> <Link to="/" >Góc Kinh nghiệm</Link></li>
                        <li> <Link to="/" >Địa danh</Link></li>
                        <li> <Link to="/">Check-in</Link></li>
                        <li> <Link to="/">Đăng ký</Link></li>
                    </ul>
                </div>
                <div className="hero-text-box">
                    <h1>Còn trẻ mà không đi đó đi đây<br/> thì bạn định chờ đến bao giờ nữa.</h1>
                    <Link to="/" className="btn btn-full">Tôi muốn đi</Link>
                    <Link to="/" className="btn btn-ghost">Hiện thị nhiều hơn</Link>
                </div>
            </header>
        )
    }
})

module.exports = Header;