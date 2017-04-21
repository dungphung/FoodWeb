
// Login
export var resetButton = () => {
    return {
        type: 'RESET_BUTTON'
    }
}

export var pressLogin = () => {
    return {
        type: 'PRESS_LOGIN'
    }
};

export var pressSignup = () => {
    return {
        type: 'PRESS_SIGNUP'
    }
};

export var pressUpload = () => {
    return {
        type: 'PRESS_UPLOAD'
    }
};

export var loginSuccess = (username) => {
    return {
        type: 'LOGIN_SUCCESS',
        username
    }
}


