import { useContext, useState } from "react"
import TodoItem from "./TodoItem"
import { TodoContext } from "../App"
import { Pagination } from 'antd';

const TodoGroup = () => {
    const {state} = useContext(TodoContext)
    const [currentPage, setCurrentPage] = useState(1)

    const PAGE_SIZE = 10;

    const pageChangeHandler = (page) => {
        setCurrentPage(page)
    }

    return (state != null && state.length > 0) ? 
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
        }}>    
            {state.slice((currentPage - 1) * PAGE_SIZE, (currentPage) * PAGE_SIZE).map((todo, _) => <TodoItem key={todo.id} todo={todo}/>)}
            <Pagination simple defaultCurrent={1} pageSize={PAGE_SIZE} total={state.length} onChange={pageChangeHandler}/>
        </div> :
        <div>Add the things you need to do today...</div>
}

export default TodoGroup