import { useContext, useEffect, useState } from "react";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import { getTodoList } from "../api/todo";
import { TodoContext } from "../App";
import { ACTION } from "../context/todoReducer";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const TodoList = () => {
  const {dispatch} = useContext(TodoContext);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);

    getTodoList()
      .then( (todos) => {
        dispatch({type: ACTION.SET, payload: todos})
        setLoading(false);
      })
  }, [])

  return (
      <div style={{
        display: "flex",
        flexDirection: "column"
      }}>
        {loading ? 
          <Spin indicator={<LoadingOutlined spin />} /> : 
          <>
            <h1>Todo List</h1>
            <TodoGroup/>
            <TodoGenerator/>
          </>
        }
      </div>
  );
}

export default TodoList