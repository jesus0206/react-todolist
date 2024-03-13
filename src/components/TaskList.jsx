import { useContext } from "react";
import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1>no hay elementos</h1>;
  }

  return (
    <>
      {tasks.map((item) => (
        <TaskCard key={item.id} task={item} />
      ))}
    </>
  );
}

export default TaskList;
