var redux = require('redux');
var {pressButtonReducer, pressButtonFuncReducer, loginReducer } = require('reducers');

export var configure = () => {
    var reducer = redux.combineReducers({
        button: pressButtonReducer,
        buttonFunc: pressButtonFuncReducer,
        login: loginReducer
    });

    var store = redux.createStore(reducer);

    return store;
}