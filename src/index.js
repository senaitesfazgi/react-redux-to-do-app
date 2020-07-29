import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { addNewToDo } from './actions/todos';
import toDoReducer from './reducers/todos';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

/**
 * Redux Store
 * Store is the full representation of our state. It is a complex object that
 * keeps track of the state data, and will help us operate on it using defined
 * reducers/actions.
 */
const store = createStore( toDoReducer );

// Attempt to output, see if we're getting an error.
store.subscribe( () => console.log( store.getState() ) ); // Outputs each time a change occurs (subcribe watches for changes.)

/**
 * Redux Dispatch
 * Dispatch is used for us to send commands for mutation/manipulation/reads from
 * our store/state data.
 */
store.dispatch( addNewToDo( "Buy milk." ) );
store.dispatch( addNewToDo( "Practice React." ) );
store.dispatch( addNewToDo( "Practice Redux." ) );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
