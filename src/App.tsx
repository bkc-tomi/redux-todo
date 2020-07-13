import React from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

interface Props {
  todos: string[];
}

class App extends React.Component<{}, Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  addTodo(newTodo: string) {
    const todos = this.state.todos;
    todos.push(newTodo);
    this.setState({todos: todos});
  }

  deleteTodo(index: number) {
    const todos = this.state.todos;
    todos.splice(index, 1);
    this.setState({todos: todos});
  }

  render() {
    return (
      <div>
        <TodoForm 
          add={ this.addTodo.bind(this) } 
        />
        <TodoList
          todos={ this.state.todos }
          del={ this.deleteTodo.bind(this) }
        />
      </div>
    );
  }
}

export default App;
