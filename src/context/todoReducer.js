export const initialState = [];

export const ACTION = {
  ADD: "ADD",
  DELETE: "DELETE",
  UPDATE: "UPDATE",
  SET: "SET"
};

export const todoReducer = (state, action) => {
  switch (action.type){
    case ACTION.ADD:
      return [...state, action.payload]
    case ACTION.DELETE:
      return state.filter(todo => todo.id !== action.payload)
    case ACTION.UPDATE:
      return state.map(todo => 
        todo.id === action.payload.id ? action.payload : todo)
    case ACTION.SET:
      return action.payload
    default:
      return state
  }
};