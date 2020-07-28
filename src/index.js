import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import { v4 as uuidv4 } from 'uuid';
import {Provider} from 'react-redux';

/**
 * Redux actions
 * Actions are labels for what type of functionality or  manipulation
 * we will be performing or allowing on our global state data.
 * The action "names" ('type' property values), by convention are
 * they are representing a constant value
 */

 const addNewToDo = toDoContent =>{
   return {
       type:'ADD_NEW_TO_DO', //our action "label."
       value:toDoContent
     }
   }

   const removeToDo = toDoId =>{
    return {
        type:'REMOVE_TO_DO', //Our action "Lable"
        value: toDoId // for remval we need a unique identifier
      }
    }

    /**
     * Redux Reducer
     * A reducer will actually carry out the manipulation, mutation on the 
     * state date. It should expect an action to be passed in with any necessary target dara to perform its duty.
     */
const toDoReducer = (state = [], action) =>{

  switch(action.type)
  {
    case 'ADD_NEW_TO_DO':
      const newTask = {
        uniqueId: uuidv4(), // Ensure a unique ID.
        value: action.value 
      };
      state.push(newTask);
      return state;    

      case 'REMOVE_TO_DO':
        // Returns a filtered version of the array, leaving only the items that DIDN'T match the "id" parameter.
        state = state.filter( toDo => toDo.uniqueId !== action.value ); // We'll have an array without the target!
        // Return the updated state value.
        return state;
  }
}
let store = createStore(toDoReducer);
store.subscribe(() => console.log(store.getState()));
store.dispatch( addNewToDo( "Buy milk." ) );
store.dispatch( addNewToDo( "Practice React." ) );
store.dispatch( addNewToDo( "Practice Redux." ) );
ReactDOM.render(
  <Provider store ={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
