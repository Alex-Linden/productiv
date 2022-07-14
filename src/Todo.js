import React from "react";

/** Simple presentation component for a todo.
 *
 * Props:
 * - todo: {todoDatat} = { id, title, description, priority }
 * TODO: figure out if we need id
 * { EditableTodo, TopTodo } -> Todo
 **/

function Todo({ todoData }) {
  return (
    <div className="Todo">
      <div><b>{todoData.title}</b> <small>(priority: {todoData.priority})</small></div>
      <div><small>{todoData.description}</small></div>
    </div>
  );
}

export default Todo;
