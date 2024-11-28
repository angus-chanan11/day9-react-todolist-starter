import { useContext } from "react"
import { TodoContext } from "../App"
import { ACTION } from "../context/todoReducer"
import "./TodoItem.css"

const TodoItem = (props) => {   
    const {dispatch} = useContext(TodoContext)

    const buttonClickHandler = () => {
        dispatch({type: ACTION.DELETE, payload: props.todo.id})
    }

    const spanClickHandler = () => {
        dispatch({type: ACTION.TOGGLE, payload: props.todo.id})
    }

    return <div>
        <span className={props.todo.done ? "finished" : ""} onClick={spanClickHandler}>{props.todo.text}</span>
        <button onClick={buttonClickHandler}>X</button>
    </div>
} 

export default TodoItem