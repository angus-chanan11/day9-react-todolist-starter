import { useContext, useState } from "react"
import { TodoContext } from "../App"
import { ACTION } from "../context/todoReducer"
import "./TodoGenerator.css"
import { addTodo } from "../api/todo"

const TodoGenerator = () => {
    const [todoText, setTodoText] = useState("")
    const {dispatch} = useContext(TodoContext)

    const inputChangeHandler = (event) => {
        setTodoText(event.target.value)
    }

    const clickHandler = () => {
        const trimText = todoText.trim()
        if (trimText === "") return
        const newTodo = {text: trimText, done: false}
        addTodo(newTodo)
            .then((todo) => 
                dispatch({type: ACTION.ADD, payload: todo})
        )
        
    }

    return <div className={"todo-generator-wrapper"}>
        <input style={{width: "39vw"}} value={todoText} onChange={inputChangeHandler}/>
        <button className={"addButton"} onClick={clickHandler}>add</button>
    </div>
}

export default TodoGenerator