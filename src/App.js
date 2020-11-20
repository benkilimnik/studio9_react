import React, { Component } from "react"
import Todos from "./Todos"
import AddTodo from "./AddTodoForm"

// this will be the root component where we save the state

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Finish dev project" },
      { id: 2, content: "Learn some Ui Ux" },
    ],
  }
  delTodo = (id) => {
    // console.log(id)
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id
    })
    this.setState({
      todos: todos, // if key and value have same name can just write todos
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]
    this.setState({
      todos: todos,
    })
  }
  render() {
    return (
      <div className="container todo-app">
        <h1 className="center green-text">Cacti Todo List</h1>
        {/* make separate component responsible for listing todos */}
        <Todos todos={this.state.todos} delTodo={this.delTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }
}
export default App
