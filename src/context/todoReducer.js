export const initialState = [
  {id: Date.now(), text: "the first todo", done: false},
  {id: Date.now(), text: "the second todo", done: false},
];

export const ACTION = {
  ADD: "ADD",
  DELETE: "DELETE"
};

export const todoReducer = (state, action) => {
  switch (action.type){
    case ACTION.ADD:
      return [...state, {id: Date.now(), text: action.payload, done: false}]
    case ACTION.DELETE:
      return state.filter(todo => todo.id !== action.payload)
    default:
      return state
  }
};