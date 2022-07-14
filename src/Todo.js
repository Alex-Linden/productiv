import React from "react";

/** Simple presentation component for a todo.
 *
 * Props:
 * - todo: {todoDatat} = { id, title, description, priority }
 * TODO: figure out if we need id
 * { EditableTodo, TopTodo } -> Todo
 **/

function Todo({ id, title, description, priority }) {
  return (
    <div className="Todo">
      <div><b>{title}</b> <small>(priority: {priority})</small></div>
      <div><small>{description}</small></div>
    </div>
  );
}

export default Todo;
