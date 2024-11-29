import axios from "axios";

const instance = axios.create({
    baseURL: "https://67495c57868020296630a978.mockapi.io/api/v1/",
    timeout: 5000
})

const TODO_PATH_PREFIX = "/TodoItem";

export const getTodoList = async () => {
    const response = await instance.get(TODO_PATH_PREFIX);
    return response.data;
}

export const addTodo = async (newTodo) => {
    const response = await instance.post(TODO_PATH_PREFIX, newTodo)
    return response.data;
}

export const deleteTodo = async (todoId) => {
    await instance.delete(`${TODO_PATH_PREFIX}/${todoId}`)
}

export const updateTodo = async (id, {text, done}) => {
    const response = await instance.put(`${TODO_PATH_PREFIX}/${id}`, {id, text, done})
    return response.data;
}