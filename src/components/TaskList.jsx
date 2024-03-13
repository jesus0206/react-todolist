import TaskCard from "./TaskCard";
function TaskList({ tasks, deleteTask }) {
  if (tasks.length === 0) {
    return <h1>no hay elementos</h1>;
  }

  return (
    <>
      {tasks.map((item) => (
        <TaskCard key={item.id} task={item} deleteTask={deleteTask} />
      ))}
    </>
  );
}

export default TaskList;
