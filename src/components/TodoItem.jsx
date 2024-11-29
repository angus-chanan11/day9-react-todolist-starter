import { useContext, useState } from "react"
import { TodoContext } from "../App"
import { ACTION } from "../context/todoReducer"
import "./TodoItem.css"
import { deleteTodo, updateTodo } from "../api/todo"
import { Button, Modal } from "antd"
import { EditOutlined } from '@ant-design/icons';

const TodoItem = ({todo}) => {   
    const {dispatch} = useContext(TodoContext)
    const [popupOpen, setPopupOpen] = useState(false)
    const [todoText, setTodoText] = useState(todo.text)

    const buttonClickHandler = () => {
        deleteTodo(todo.id)
            .then((_) => dispatch({type: ACTION.DELETE, payload: todo.id}))
    }

    const textClickHandler = () => {
        updateTodo(todo.id, {text: todo.text, done: !todo.done})
            .then((todo) => {
                dispatch({type: ACTION.UPDATE, payload: todo})})
    }

    const showModal = () => {
        setPopupOpen(true)
    }

    const closeModal = () => {
        setPopupOpen(false)
    }

    const updateTodoHandler = () => {
        const trimText = todoText.trim()
        if (trimText === "") return
        updateTodo(todo.id, {text: trimText, done: todo.done})
            .then((todo) => {
                closeModal()
                dispatch({type: ACTION.UPDATE, payload: todo})
            })
    }

    const inputChangeHandler = (event) => {
        setTodoText(event.target.value)
    }

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
        }}>        
            <p className={`todo-text ${todo.done ? "finished" : ""}`} 
                onClick={textClickHandler}>
                {todo.text}
            </p>
            <button className={"remove-button"} onClick={buttonClickHandler}>X</button>
            <Button shape="circle" onClick={showModal}><EditOutlined/></Button>
            <Modal title="Edit Todo" open={popupOpen} onCancel={closeModal} width="70%"
                footer={(_, { CancelBtn }) => (
                    <>
                      <CancelBtn />
                      <Button onClick={updateTodoHandler}>Update</Button>
                    </>
                  )}
            >
                <input value={todoText} onChange={inputChangeHandler}/>
            </Modal>
        </div>
    )
} 

export default TodoItem