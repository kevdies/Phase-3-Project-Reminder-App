import React from 'react'
import Task from './Task'

function TaskList({ tasks }) {
// console.log(tasks)
    return(
        <div className="each-task">
            {tasks.map((eachTask) => (
                <Task
                    key={eachTask.id}
                    eachTask={eachTask.description}
                    // day={eachTask.day_id}
                    // category={eachTask.category_id}
                />
           ))}
        </div>
    )
}

export default TaskList