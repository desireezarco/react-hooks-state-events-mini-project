import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const newCategories = categories.filter(category => category !== "All")

  const [formData, setFormData] = useState({
    text: "",
    category: ""
  })

  function handleInput(event) {
    const value = event.target.value
    const name = event.target.name
    setFormData({...formData, [name]: value})
  }

  function handleSubmit(event) {
    event.preventDefault()
    const newTask = {
      text: formData.text,
      category: formData.category
    }
    onTaskFormSubmit(newTask)
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={formData.text} onChange={handleInput}/>
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={handleInput}>

          {newCategories.map(category => {
            return <option value={category} key={category}>{category}</option>
          })}

        </select>
      </label>
      <input type="submit" value="Add task"/>
    </form>
  );
}

export default NewTaskForm;