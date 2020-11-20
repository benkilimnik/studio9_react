import React from "react"

const CactiTodos = ({ todos, delTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <div
            onClick={() => {
              delTodo(todo.id)
            }}
          >
            {todo.content}
          </div>
        </div>
      )
    })
  ) : (
    <p className="center">No todos left - hurray! :)</p>
  ) // ternary operator to check if there are todos
  return <div className="todos collection">{todoList}</div>
}

export default CactiTodos
