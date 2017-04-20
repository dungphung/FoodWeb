var uuid = require('node-uuid');
var moment = require('moment');


export var pressButtonReducer = (state = 0, action) => {
    switch(action.type) {
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

