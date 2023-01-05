import React from'react';
import Header from './Header.js'
import Days from './Days.js'
import Form from './Form.js'
import TaskContainer from './TaskContainer.js';

function App() {
  return (
    <div className="App">
      <Header>
        
        <header>TO DO LIST </header>

      </Header>
      <Form>
        <p>Add New Task Here</p>
        </Form>
      <Days> 
        <p>Days of the Week </p>
        </Days>
    </div>
  );
}

export default App;
