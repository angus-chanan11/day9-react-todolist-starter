import { useContext } from "react"
import TodoItem from "./TodoItem"
import { TodoContext } from "../App"

const TodoGroup = () => {
    const {state, dispatch} = useContext(TodoContext)

    return state.map((todo, index) => <TodoItem key={todo.id} todo={todo}/>)
}

export default TodoGroup