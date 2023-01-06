import React, {useState, useEffect} from'react'

import TaskForm from './TaskForm.js'
import TaskList from './TaskList.js'
// import Task from './Task.js'


function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/tasks')
      .then((res) => res.json())
    .then((tasksDB) => setTasks(tasksDB))
  }, [])





  return (
    <div className="App">
      <TaskForm />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
