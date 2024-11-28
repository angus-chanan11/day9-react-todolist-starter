import { useContext, useState } from "react"
import { TodoContext } from "../App"
import { ACTION } from "../context/todoReducer"

const TodoGenerator = () => {
    const [todoText, setTodoText] = useState("")
    const {dispatch} = useContext(TodoContext)

    const inputChangeHandler = (event) => {
        setTodoText(event.target.value)
    }

    const clickHandler = () => {
        dispatch({type: ACTION.ADD, payload: todoText})
    }

    return <div>
        <input value={todoText} onChange={inputChangeHandler}/>
        <button onClick={clickHandler}>add</button>
    </div>
}

export default TodoGenerator