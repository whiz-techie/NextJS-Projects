import { ITask } from "./types/task"

const baseUrl = "http://localhost:3001"

export const getAllTodos = async (): Promise<ITask[]> => {
    const res = await fetch(`${baseUrl}/tasks`)
    const todos = await res.json()
    return todos
}

export const addTodo = async () => {
    const res = await fetch(`${baseUrl}/tasks`,{
        
    })
}