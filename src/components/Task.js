import React from "react";

function Task({ text, category, onDeleteChange }) {

  return (
    <div className="task" id={text}>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={onDeleteChange}>X</button>
    </div>
  );
}

export default Task;