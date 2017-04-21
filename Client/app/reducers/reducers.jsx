var uuid = require('node-uuid');
var moment = require('moment');


export var pressButtonReducer = (state = 0, action) => {
    switch(action.type) {
        case 'RESET_BUTTON':
            state = 0;
            return state;
        case 'PRESS_LOGIN':
            state = 1;
            return state;
        case 'PRESS_SIGNUP':
            state = 2;
            return state;
        default:
            return state;
    }
}

export var pressButtonFuncReducer = (state = 0, action) => {
    switch(action.type) {
        case 'RESET_BUTTON_FUNC':
            state = 0;
            return state;
        case 'PRESS_UPLOAD':
            state = 3;
            return state;
        default:
            return state;
    }
}

export var loginReducer = (state = {isLogin: false, username: 'undefine'}, action) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isLogin: true,
                username: action.username
            }
        default: 
            return state;
    }
}

