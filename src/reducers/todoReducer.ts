import { TodosType } from "../types/type";
import { ActionType } from "../types/actionType";

const initState:TodosType = {
  todos: []
}

const todoReducer = (state: TodosType = initState, action: ActionType) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [...state.todos, action.text]
      };
    case "DELETE_TODO":
      const todos = [...state.todos];
      todos.splice(action.index, 1);
      return {
        todos: todos
      };
    default:
      return state;
  }
}

export default todoReducer;
