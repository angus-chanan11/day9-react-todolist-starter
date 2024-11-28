export const initialState = [
  {id: Date.now(), text: "the first todo", done: false},
  {id: Date.now(), text: "the second todo", done: false},
];

export const ACTION = {
  ADD: "ADD"
};

export const todoReducer = (state, action) => {
  switch (action.type){
    case ACTION.ADD:
      return [...state, {id: Date.now(), text: action.payload, done: false}]
    default:
      return state
  }
};