import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from "../constants/index";

export const add_todo = (todo) => ({type: ADD_TODO, payload: todo});

export const edit_todo = (todoId) => ({type: EDIT_TODO, payload: todoId});

export const remove_todo = (todo) => ({type: REMOVE_TODO, payload: todo});