import { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./styles/App.css";

function App() {
  const [tasks, setTasks] = useState(() => {
  const savedTasks = localStorage.getItem("tasks");
  

  return savedTasks
    ? JSON.parse(savedTasks)
    : [
        {
          id: 1,
          title: "Learn React",
          description: "Complete React Hooks tutorial",
        },
      ];
});

const [editingTask, setEditingTask] = useState(null);

  const addTask = (newTask) => {
    console.log("Task Added:", newTask);
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        completed: false,
        ...newTask,
      },
    ]);
  };

  const deleteTask = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmDelete) return;

    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (task) => {
    setEditingTask(task);
  };
  const updateTask = (id, updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task
      )
    );

    setEditingTask(null);
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="app">
      <Header />
      <TaskForm
        addTask={addTask}
        updateTask={updateTask}
        editingTask={editingTask}
        setEditingTask={setEditingTask}
      />
      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} toggleComplete={toggleComplete}/>
    </div>
  );
}

export default App;