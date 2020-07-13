import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component<any> {
  deleteTodo(index: number) {
    this.props.del(index);
  }

  render() {
    return (
      <div>
        <h5>Todo List</h5>
        <ul>
          { this.props.todos.map(( todo:string, index: number ) => {
            return (
              <TodoItem
                todo={ todo }
                index={ index }
                key={ index }
                del={ this.deleteTodo.bind(this)}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;