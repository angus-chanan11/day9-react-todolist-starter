import { useContext, useEffect } from "react";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import { getTodoList } from "../api/todo";
import { TodoContext } from "../App";
import { ACTION } from "../context/todoReducer";

const TodoList = () => {
  const {dispatch} = useContext(TodoContext);
  
  useEffect(() => {
    getTodoList()
      .then( (todos) => {
        dispatch({type: ACTION.SET, payload: todos})
      })
  }, [])

  return (
      <div>
        <h1>Todo List</h1>
        <TodoGroup/>
        <TodoGenerator/>
      </div>
  );
}

export default TodoList