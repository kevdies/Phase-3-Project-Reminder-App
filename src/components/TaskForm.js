import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import { PlusCircleFill, PlusSquare } from "react-bootstrap-icons";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// not sure if container, row or col should be in this component.   quickly tried to no avail. moved on


function TaskForm({ tasks, setTasks }) {
console.table(tasks)
  const [formTask, setFormTask] = useState("")
  const [category, setCategory] = useState(1)
  const [day, setDay] = useState(1)

  // function handleCategoryChange(event) {
  //   setCategory(event.target.value)
  // }

  // function handleDayChange(event) {
  //   setDay(event.target.value)
  // }

  function handleNewTaskChange(event) {
    setFormTask(event.target.value)
  }

   const onTaskFormSubmit = (newTask) => {
     const newTasks = [...tasks, newTask];
     setTasks(newTasks);
   };

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:9292/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "description": formTask,
        "category_id": category,
        "day_id": day,
      })
    }).then((response) => response.json())
    .then((response) =>onTaskFormSubmit(response))
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <input type="text" placeholder="Task" name='task' value={formTask} onChange={handleNewTaskChange} />

        <label>
          Select Day:
          <select name='day_of_week' value={day} onChange={(e) => setDay(e.target.value)}>
            <option value="1">Monday</option>
            <option value="2">Tuesday</option>
            <option value="3">Wednesday</option>
            <option value="4">Thursday</option>
            <option value="5">Friday</option>
            <option value="6">Saturday</option>
            <option value="7">Sunday</option>
          </select>
        </label>

        <label>
        Category:
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="1">Urgent</option>
          <option value="2">Non Urgent</option>

        </select>
        </label>

        <Button variant="info" type="submit">
          ✚{/* <PlusCircleFill /> ✚ */}
          {/* the two above are just icons imported for looks within the button */}
        </Button>
      </Form.Group>
    </Form>
  );
}

export default TaskForm;
