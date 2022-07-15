import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - todoData
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ todoData, update, remove }) {
  const [isEditing, setIsEditing] = useState(false); 
  const { id, title, description, priority } = todoData;

  /** Toggle if this is being edited */
  function toggleEdit() {
    setIsEditing(isEditing => !isEditing);
  }
  
  /** Call remove fn passed to this. */
  function handleDelete() {
    remove(id);
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) {
    update({ ...formData, id });
    setIsEditing(false);
  }

  return (
    <div className="EditableTodo">

      {isEditing
        ? (<TodoForm
          key={id}
          title={title}
          description={description}
          priority={priority}
          submitFunction={handleSave} />)
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
            key={id}
            title={title}
            description={description}
            priority={priority} />
        </div>)
      }
    </div>
  );
}

export default EditableTodo;
