import React from 'react'

export const TaskItem = ({ id, title, userId, deleteTask, doneTask, done }) => {
  const doneTaskHandler = () => {
    if (!done) {
      doneTask(userId, id, true)
    } else {
      doneTask(userId, id, false)
    }
  }

  const deleteTaskHandler = () => {
    deleteTask(userId, id)
  }

  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
        <input 
          className="form-check-input" 
          type="checkbox" 
          id="checkboxNoLabel" 
          value={done}
          onChange={doneTaskHandler}
          checked={done}
        />
        <span className="title-text">{title}</span>
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={deleteTaskHandler}
        ></button>
      </li>
    </>
  )
}
