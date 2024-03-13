import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { tasks as data } from "./data/task";

function App() {
  const [tasks, setTasks] = useState(data);

  useEffect(() => {
    setTasks(data);
  }, []);

  const createTask = (newTask) => {
    setTasks([
      ...tasks,
      {
        ...newTask,
        id: tasks.length + 1,
      },
    ]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id != id));
  };

  return (
    <div>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
