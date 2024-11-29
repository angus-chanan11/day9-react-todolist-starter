export const initialState = [];

export const ACTION = {
  ADD: "ADD",
  DELETE: "DELETE",
  TOGGLE: "TOGGLE",
  SET: "SET"
};

export const todoReducer = (state, action) => {
  switch (action.type){
    case ACTION.ADD:
      return [...state, action.payload]
    case ACTION.DELETE:
      return state.filter(todo => todo.id !== action.payload)
    case ACTION.TOGGLE:
      return state.map(todo => 
        todo.id === action.payload ? {...todo, done: !todo.done} : todo)
    case ACTION.SET:
      return action.payload
    default:
      return state
  }
};