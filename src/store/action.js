import { SET_TODO_INPUT, ADD_TODO_INPUT } from "./constant";

export const setTodoInput = payload => ({
    type: SET_TODO_INPUT,
    payload
})

export const addTodoInput = payload => ({
    type: ADD_TODO_INPUT,
    payload
})