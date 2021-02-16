import React, { useState } from "react";
import "./styles.css";

import Navbar from "./Components/Navbar/Navbar";
import TaskList from "./Components/TaskList/TaskList";

let idAcc = 0;
const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    console.log("função sendo chamada em App.");
    const newTask = {
      id: generateId(),
      title,
      state
    };
    setTasks((existentTasks) => {
      return [...existentTasks, newTask];
    });
  };

  const updateTask = (id, title, state) => {
    setTasks((existentTasks) => {
      return existentTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((existentTasks) => {
      return existentTasks.filter((task) => task.id !== id);
    });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList
          title="Pendente"
          onAddTask={addTask}
          taskState="Pendente"
          tasks={tasks.filter((t) => t.state === "Pendente")}
          onTaskUpdate={updateTask}
          onTaskDelete={deleteTask}
        />

        <TaskList
          title="Fazendo"
          onAddTask={addTask}
          taskState="Fazendo"
          tasks={tasks.filter((t) => t.state === "Fazendo")}
          onTaskUpdate={updateTask}
          onTaskDelete={deleteTask}
        />

        <TaskList
          title="Completa"
          onAddTask={addTask}
          taskState="Completa"
          tasks={tasks.filter((t) => t.state === "Completa")}
          onTaskUpdate={updateTask}
          onTaskDelete={deleteTask}
        />
      </div>
    </div>
  );
}
