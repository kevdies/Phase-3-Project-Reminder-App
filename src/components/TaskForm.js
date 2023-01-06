import React from'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




function TaskForm(){




    return (
        <Form>
        <Form.Label>Add New Task Here</Form.Label>
        <input
          type='text'
          placeholder='Task'
        />
        <input
          type='text'
          placeholder='Day'
           />
           <input
          type='text'
          placeholder='Category'
        />
        <Button variant="primary" type="submit">
        A D D | | T A S K
      </Button>
    </Form>
    )
}

export default TaskForm