/**
 * Redux Actions
 * Actions are "labels" for what type of functionality/manipulation
 * we will be performing/allowing on our global state data.
 * The action "names" ('type' property values), by convention, are
 * uppercase as they are representing a "constant" value.
 */
const addNewToDo = toDoContent => {
  return {
    type: 'ADD_NEW_TO_DO', // Our action "label."
    value: toDoContent // We can also transport necessary info that the reducer might need.
  }
}
const removeToDo = toDoId => {
  return {
    type: 'REMOVE_TO_DO', // Our action "label."
    value: toDoId // For removal, we need a unique identifier.
  }
}

export { addNewToDo, removeToDo };
