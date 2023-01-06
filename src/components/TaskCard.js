import React from "react";
import Card from "react-bootstrap/Card";

function Task({ eachTask, number }) {
  return (
    <div className="task-container">
      <Card
        bg="secondary"
        key="Secondary"
        text="dark"
        style={{ width: "18rem" }}
        className="mb-2"
      >
        <Card.Body>
          <Card.Title> Task #{number} </Card.Title>
          <Card.Text>{eachTask}</Card.Text>
          <Card.Footer></Card.Footer>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Task;
