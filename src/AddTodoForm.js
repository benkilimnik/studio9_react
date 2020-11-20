// class based component since need state for form

import React, { Component } from "react"

class AddCactiTodo extends Component {
  state = {
    content: "",
  }
  handleChange = (event) => {
    this.setState({ content: event.target.value }) // keeps in sync with input in the form
  }
  handleSubmit = (event) => {
    event.preventDefault()
    // console.log(this.state)
    this.props.addTodo(this.state)
    this.setState({
      content: "",
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add new todo</label>
          <input
            onChange={this.handleChange}
            value={this.state.content}
            type="text"
          />
        </form>
      </div>
    )
  }
}

export default AddCactiTodo
