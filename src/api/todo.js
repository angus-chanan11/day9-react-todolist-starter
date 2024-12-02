import { instance } from "./interceptor";

const TODO_PATH_PREFIX = "/todo-items";

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