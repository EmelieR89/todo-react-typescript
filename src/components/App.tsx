import React, { useState, ChangeEvent } from "react";
// import logo from "./logo.svg";
import "./App.css";
import List from "./List";
import TodoForm from "./TodoForm";
import { FormEvent } from "react";
import { Todo } from "./interfaceTodo";

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [todoValue, setTodoValue] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoValue(event.currentTarget.value);
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setTodos(previousTodos => [
      ...previousTodos,
      {
        task: todoValue,
        finished: false
      }
    ]);
    setTodoValue("");
  };
  return (
    <div className="App">
      <header style={styleHeader}>
        <h1>Todo List</h1>
      </header>
      <List todos={todos} />
      <TodoForm
        onSubmit={handleSubmit}
        onInputChange={handleChange}
        inputValue={todoValue}
      />
    </div>
  );
}

export default App;

const styleHeader = {
  color: "green"
};
