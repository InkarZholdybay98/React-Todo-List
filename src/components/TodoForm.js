import React, { useState } from "react";

export default function TodoForm({ submitTodo }) {
  const [task, setTask] = useState("");

  function addTodoTask(e) {
    e.preventDefault();

    submitTodo(task);

    setTask("");
  }

  return (
    <div className="TodoForm">
      <div className="NameTodoList">
        <h1>Todo List</h1>
      </div>

      <form onSubmit={addTodoTask}>
        <label htmlFor="task">Your Task</label>
        <input
          type="text"
          id="task"
          required
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
}
