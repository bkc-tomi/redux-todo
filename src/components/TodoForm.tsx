import React, { Component } from "react";

class TodoForm extends Component<any> {
  state: {
    newTodo: string,
  }
  constructor(props: any) {
    super(props);
    this.state = {
      newTodo: ""
    }
  }

  handleChange(e:React.ChangeEvent<HTMLInputElement>) {
    this.setState({newTodo: e.target.value});
  }

  addTodo() {
    if (this.state.newTodo === "") return;
    this.props.add(this.state.newTodo);
    this.setState({newTodo: ""});
  }

  render() {
    return (
      <div>
        <h3>My Todo</h3>
        <input
          value={ this.state.newTodo }
          onChange={ this.handleChange.bind(this) }
          placeholder="Input here..."        
        />
        <button
          onClick={ this.addTodo.bind(this) }
        >ADD</button>
      </div>
    );
  }
}

export default TodoForm;