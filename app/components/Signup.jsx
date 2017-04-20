var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

var Signup = React.createClass({
    render: function() {
        return (
            <section className="section-signup">
                <div className="row">
                    <h2>ĐĂNG KÝ</h2>
                </div>
                <div className="row">
                    <form action="" className="signup-form">
                        <div className="row">
                            <div className="col span_1_of_3">
                                <label htmlFor="name">Họ tên</label>
                            </div>
                            <div className="col span_2_of_3">
                                <input type="text" name="name" id="name" placeholder="Tên của bạn" required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col span_1_of_3">
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="col span_2_of_3">
                                <input type="email" name="email" id="email" placeholder="Email của bạn" required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col span_1_of_3">
                                <label htmlFor="password">Mật khẩu</label>
                            </div>
                            <div className="col span_2_of_3">
                                <input type="password" name="passowrd" id="password" placeholder="Mật khẩu đăng nhập" required />
                            </div>
                        </div>
                        <div className="row row-btn">
                            <button className="btn">Đăng kí</button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
});

module.exports = connect(
    (state) => {
        return state;
    }
)(Signup);