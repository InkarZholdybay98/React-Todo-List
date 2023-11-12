import React from "react";

export default function Task({ todo, deleteTodo, completed, toggleTodo }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => {
          toggleTodo(todo.id, e.target.checked);
        }}
      />
      <h4>{todo.task}</h4>
      <button
        onClick={() => {
          deleteTodo(todo.id);
        }}
      >
        delete
      </button>
    </li>
  );
}
