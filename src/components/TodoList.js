import React from "react";
import Task from "./Task";

export default function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <div className="todoList">
      <h3>Todo List</h3>
      <ul>
        {todos.map((todo) => (
          <Task
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            completed={todo.completed}
          />
        ))}
      </ul>
    </div>
  );
}
