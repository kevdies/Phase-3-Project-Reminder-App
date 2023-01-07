import React, { useState, useEffect } from "react";
import TaskForm from "./TaskForm.js";
import TaskList from "./TaskList.js";


function App() {
const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/tasks")
      .then((res) => res.json())
      .then((tasksDB) => setTasks(tasksDB));
  }, []);

console.table(tasks)

  return (
    <div className="App">
      <TaskForm tasks={tasks} setTasks={setTasks}/>
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
