import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

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
    <div className="max-w-md mx-auto">
      <form onSubmit={onHandleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          placeholder="Introduzca su tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-3"
        />
        <textarea
          placeholder="Introduzca su area"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-3"
        />
        <button className="bg-indigo-500 px-3 py-1 text-white rounded-md">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
