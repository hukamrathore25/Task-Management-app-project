import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask, editTask, toggleComplete}) {
  
  if (tasks.length === 0) {
    return <p className="no-task">No tasks available.</p>;
  }
  
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          editTask={editTask}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
}

export default TaskList;