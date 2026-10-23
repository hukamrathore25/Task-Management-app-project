function TaskItem({ task, deleteTask, editTask, toggleComplete }) {
  return (
    <div className="task-item">
      <div className="task-content">

        <div className="task-header">

          <div className="task-title">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(task.id)}
            />

            <h3 className={task.completed ? "completed" : ""}>
              {task.title}
            </h3>
          </div>

          <div className="task-buttons">
            <button onClick={() => editTask(task)} disabled={task.completed}>
              Edit
            </button>

            <button onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </div>

        </div>

        <p className={task.completed ? "completed" : ""}>
          {task.description}
        </p>

      </div>
    </div>
  );
}

export default TaskItem;