import React from 'react'


function Task({key, eachTask}){


  return (
    <div className="card">
      <div className="details">
        <p>{eachTask}</p>
        <button className="emoji-button delete">
          🗑
        </button>
        <button className="emoji-button edit">
          ✎
          </button>
      </div>
    </div>
  );
}

export default Task;

