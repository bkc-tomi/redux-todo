import { ActionType } from "../types/actionType";

export function addTodo(text:string):ActionType {
  return {type: "ADD_TODO", text};
}

export function deleteTodo(index: number):ActionType {
  return {type: "DELETE_TODO", index};
}