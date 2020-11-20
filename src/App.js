import React, { Component } from "react"
import CactiTodos from "./Todos"
import AddCactiTodo from "./AddTodoForm"

// this will be the root component where we save the state

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Buy some cacti" },
      {
        id: 2,
        content:
          "Plant said cacti in the yard with a big shovel. Treat with care.",
      },
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
        <CactiTodos todos={this.state.todos} delTodo={this.delTodo} />
        <AddCactiTodo addTodo={this.addTodo} />
      </div>
    )
  }
}
export default App
