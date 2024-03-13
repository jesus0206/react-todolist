import { createContext, useEffect, useState } from "react";
import { tasks as data } from "../data/task";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
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
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
