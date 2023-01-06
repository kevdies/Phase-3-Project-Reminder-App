import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import { PlusCircleFill, PlusSquare } from "react-bootstrap-icons";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// not sure if container, row or col should be in this component.   quickly tried to no avail. moved on


function TaskForm() {
  return (
    <Form>
      <Form.Group>
        <input type="text" placeholder="Task" />
        <input type="text" placeholder="Day" />
        <input type="text" placeholder="Category" />
        <Button variant="info" type="submit">
          ✚{/* <PlusCircleFill /> ✚ */}
          {/* the two above are just icons imported for looks within the button */}
        </Button>
      </Form.Group>
    </Form>
  );
}

export default TaskForm;
