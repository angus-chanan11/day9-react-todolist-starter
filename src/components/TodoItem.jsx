import { useContext } from "react"
import { TodoContext } from "../App"
import { ACTION } from "../context/todoReducer"

const TodoItem = (props) => {   
    const {dispatch} = useContext(TodoContext)

    const clickHandler = () => {
        dispatch({type: ACTION.DELETE, payload: props.todo.id})
    }

    return <div>
        <span>{props.todo.text}</span>
        <button onClick={clickHandler}>X</button>
    </div>
} 

export default TodoItem