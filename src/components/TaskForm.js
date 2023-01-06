import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { PlusCircleFill, PlusSquare } from "react-bootstrap-icons";

function TaskForm() {
  return (
    <Form>
      <input type="text" placeholder="Task" />
      <input type="text" placeholder="Day" />
      <input type="text" placeholder="Category" />
      <Button variant="info" type="submit">
        <PlusSquare /> <PlusCircleFill />
        {/* the two above are just icons imported for looks within the button */}
      </Button>
    </Form>
  );
}

export default TaskForm;
