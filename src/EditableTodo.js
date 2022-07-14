import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ id, title, description, priority }) {
  const [editStatus, setEditStatus] = useState(false);
  /** Toggle if this is being edited */
  function toggleEdit() {
    setEditStatus(!editStatus);
  }

  /** Call remove fn passed to this. */
  function handleDelete() { }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) { }

  return (
    <div className="EditableTodo">

      {editStatus
        ? (<TodoForm />)
        : (<div className="mb-3">
          <div className="float-end text-sm-end">
            <button
              className="EditableTodo-toggle btn-link btn btn-sm"
              onClick={toggleEdit}>
              Edit
            </button>
            <button
              className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
              onClick={handleDelete}>
              Del
            </button>
          </div>
          <Todo
          id={id}
          title={title}
          description={description}
          priority={priority} />
        </div>)
      }
    </div>
  );
}

export default EditableTodo;
