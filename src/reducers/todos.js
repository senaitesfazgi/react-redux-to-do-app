import { v4 as uuidv4 } from 'uuid';

/**
 * Redux Reducer
 * A reducer will actually carry out the manipulation/mutation on the
 * state data. It should expect an "action" to be passed in with any
 * necessary target data to perform its duty.
 */
const toDoReducer = ( state = [], action ) => { // Default state is an empty array here.
  switch ( action.type )
  {
    // What happens if we are adding a new to-do:
    case 'ADD_NEW_TO_DO':
      // Set up new task.
      const newTask = {
        uniqueId: uuidv4(), // Ensure a unique ID.
        value: action.value // Read passed-in "new to-do" value.
      };
      // Create a new array (with the same contents as the original.)
      const updatedState = state.slice();
      // Add this task to the state.
      updatedState.push( newTask );
      // Return the updated state value.
      return updatedState;
    // What happens if we are removing an existing to-do:
    case 'REMOVE_TO_DO':
      // Returns a filtered version of the array, leaving only the items that DIDN'T match the "id" parameter.
      state = state.filter( toDo => toDo.uniqueId !== action.value ); // We'll have an array without the target!
      // Return the updated state value.
      return state;
  }
}

export default toDoReducer;
