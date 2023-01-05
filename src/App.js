import React from'react';
import Header from './Header.js'
import Days from './Days.js'
import Form from './Form.js'
import TaskList from './TaskList.js';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <TaskList></TaskList>
      <Days></Days>
      <Form></Form>
      <Days></Days>
    </div>
  );
}

export default App;
