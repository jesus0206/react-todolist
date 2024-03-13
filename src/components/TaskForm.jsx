import { useState } from "react";

function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title,
      description,
    };
    createTask(newTask);
    setDescription("");
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <input
          placeholder="Introduzca su tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <textarea
          placeholder="Introduzca su area"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <button>Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
