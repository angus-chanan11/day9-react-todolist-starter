export const initialState = [];

export const ACTION = {
  ADD: "ADD",
  DELETE: "DELETE",
  TOGGLE: "TOGGLE"
};

export const todoReducer = (state, action) => {
  switch (action.type){
    case ACTION.ADD:
      return [...state, {id: Date.now(), text: action.payload, done: false}]
    case ACTION.DELETE:
      return state.filter(todo => todo.id !== action.payload)
    case ACTION.TOGGLE:
      return state.map(todo => 
        todo.id === action.payload ? {...todo, done: !todo.done} : todo)
    default:
      return state
  }
};