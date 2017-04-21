var React = require('react');
var { connect } = require('react-redux');
var actions = require('actions');


var Login = React.createClass({
    componentWillMount: function() {
        var {dispatch, button} = this.props;
        if (button === 0) {
            dispatch(actions.pressLogin());
        }
    },
    componentWillUnmount: function() {
        var {dispatch} = this.props;
        dispatch(actions.resetButton());
    },
    render: function () {
        return (
            <section className="section-login">
                <div className="row">
                    <h2>Đăng Nhập</h2>
                </div>
                <div className="row">
                    <form action="" className="login-form">
                        <div className="row">
                            <div className="col span_1_of_3">
                                <label htmlFor="name">Tên đăng nhập</label>
                            </div>
                            <div className="col span_2_of_3">
                                <input type="text" ref="tenDangNhap" name="name" id="name" placeholder="Tên của bạn" required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col span_1_of_3">
                                <label htmlFor="password">Mật khẩu</label>
                            </div>
                            <div className="col span_2_of_3">
                                <input type="password" ref="matKhau" name="passowrd" id="password" placeholder="Mật khẩu đăng nhập" required />
                            </div>
                        </div>
                        <div className="row row-btn">
                            <button className="btn">Đăng nhập</button>
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
)(Login);