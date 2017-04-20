var redux = require('redux');
var {pressButtonReducer } = require('reducers');

export var configure = () => {
    var reducer = redux.combineReducers({
        button: pressButtonReducer

    });

    var store = redux.createStore(reducer);

    return store;
}