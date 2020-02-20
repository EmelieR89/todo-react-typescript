import React from "react";
import ListItem from "./ListItem";
import { Todo } from "./interfaceTodo";

interface Props {
  todos: Array<Todo>;
}

const List = ({ todos }: Props) => {
  return (
    <ul>
      {todos.map(todo => (
        <ListItem
          todo={{
            task: todo.task,
            finished: todo.finished
          }}
        />
      ))}
    </ul>
  );
};

export default List;
