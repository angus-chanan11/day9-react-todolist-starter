import axios from "axios";

const instance = axios.create({
    baseURL: "https://67495c57868020296630a978.mockapi.io/api/v1/",
    timeout: 5000
})

export const getTodoList = async () => {
    const response = await instance.get("/TodoItem");
    return response.data;
}

export const addTodo = async (todoText) => {
    const response = await instance.post("/TodoItem", {id: Date.now(), text: todoText, done: false})
    return response.data;
}