import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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
          <Card.Text>
            <Button variant="dark">🗑️</Button>
          </Card.Text>
          <Card.Text>
            <Button variant="dark">✏</Button>
          </Card.Text>

        </Card.Body>
      </Card>
    </div>
  );
}

export default Task;
