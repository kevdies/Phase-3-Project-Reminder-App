import React from'react'
import Header from './Header.js'
import Days from './Days.js'
import TaskForm from './TaskForm.js'
import TaskList from './TaskList.js'
import Tasks from './Task.js'


function App() {
  return (
    <div className="App">
      <Header></Header>
      <TaskForm></TaskForm>
      <Days></Days>
      <TaskList></TaskList>
      <Tasks></Tasks>
      
    </div>
  );
}

export default App;
