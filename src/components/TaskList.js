import React from "react";
import Task from "./Task";

function TaskList({tasks, setTasks}) {

  function handleDeleteItem(event) {
    const deletedTaskId = event.target.parentNode.id
    const newArray = tasks.filter((task) => {
      return task.text !== deletedTaskId})
    setTasks(newArray)
  }



  return (
    <div className="tasks">
      {tasks.map(task => {
        return <Task key={task.text} text={task.text} category={task.category} onDeleteChange={handleDeleteItem}/>
      })}
    </div>
  );
}

export default TaskList;