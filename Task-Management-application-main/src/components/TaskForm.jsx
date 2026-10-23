import { useState, useEffect } from "react";

function TaskForm({
  addTask,
  updateTask,
  editingTask,
  setEditingTask,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
    }
  }, [editingTask]);

  const handleSubmit = () => {
    if (title.trim() === "" || description.trim() === "") {
      alert("Please fill all fields");
      return;
    }

    if (editingTask) {
      updateTask(editingTask.id, {
        title,
        description,
      });
    } else {
      addTask({
        title,
        description,
      });
    }

    setTitle("");
    setDescription("");
    setEditingTask(null);
  };

  return (
    <div className="task-form">
      <input
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        rows="4"
        placeholder="Enter task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <button onClick={handleSubmit}>
        {editingTask ? "Update Task" : "Add Task"}
      </button>
    </div>
  );
}

export default TaskForm;