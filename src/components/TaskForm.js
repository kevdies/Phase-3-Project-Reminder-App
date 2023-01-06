import React from'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




function TaskForm(){




    return (
        <Form>
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
        <Button variant="info" type="submit">
        A D D | | T A S K
      </Button>
    </Form>
    )
}

export default TaskForm