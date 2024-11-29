import { useContext } from "react"
import TodoItem from "./TodoItem"
import { TodoContext } from "../App"

const TodoGroup = () => {
    const {state} = useContext(TodoContext)
    return (state != null && state.length > 0) ? 
        state.map((todo, _) => <TodoItem key={todo.id} todo={todo}/>) :
        <div>Add the things you need to do today...</div>
}

export default TodoGroup