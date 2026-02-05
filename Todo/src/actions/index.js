import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from "../constants/index";

export const add_todo = (todo) => ({type: ADD_TODO, payload: todo});

export const remove_todo = (todoId) => ({type: REMOVE_TODO, payload: todoId});

export const edit_todo = (todo) => ({type: EDIT_TODO, payload: todo});