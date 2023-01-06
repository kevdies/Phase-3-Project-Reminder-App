import React from 'react'
import Card from 'react-bootstrap/Card'

function Task({eachTask, number}){


  return (
    <div className="task-container">
    <Card
      bg='secondary'
      key='Secondary'
      text='dark'
      style={{ width: "18rem" }}
      className="mb-2"
    >

      <Card.Body>
        <Card.Title> Task {number} </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Card>
      </div>
  );
}

export default Task;

