import React from "react";
import Task from "./TaskCard";

function TaskList({ tasks }) {
  console.log(tasks);
  return (
    <div className="each-task">
      {tasks.map((eachTask, index) => (
        <Task
          key={eachTask.id}
          number={index + 1}
          eachTask={eachTask.description}
          day={eachTask.day_id}
          category={eachTask.category_id}
        />
      ))}
    </div>
  );
}

export default TaskList;
