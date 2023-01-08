import React from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  console.log(tasks);
  return (
    <div className="each-task">
      {tasks.map((eachTask, index) => (
        <Task
          key={eachTask.id}
          number={index + 1}
          eachTask={eachTask.description}
          weekday={eachTask.day.day_of_week}
          urgency={eachTask.category.urgent}
        />
      ))}
    </div>
  );
}

export default TaskList;
