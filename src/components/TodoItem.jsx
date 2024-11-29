import { useContext } from "react"
import { TodoContext } from "../App"
import { ACTION } from "../context/todoReducer"
import "./TodoItem.css"
import { deleteTodo } from "../api/todo"

const TodoItem = ({todo}) => {   
    const {dispatch} = useContext(TodoContext)

    const buttonClickHandler = () => {
        deleteTodo(todo.id)
            .then((_) => dispatch({type: ACTION.DELETE, payload: todo.id}))
    }

    const spanClickHandler = () => {
        dispatch({type: ACTION.TOGGLE, payload: todo.id})
    }

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
        }}>        
            <p className={`todo-text ${todo.done ? "finished" : ""}`} 
                onClick={spanClickHandler}>
                {todo.text}
            </p>
            <button className={"remove-button"} onClick={buttonClickHandler}>X</button>
        </div>
    )
} 

export default TodoItem