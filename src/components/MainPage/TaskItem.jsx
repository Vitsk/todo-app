import React from 'react'

export const TaskItem = ({ id, title, description, userId, deleteTask }) => {
  const deleteTaskHandler = () => {
    deleteTask(userId, id)
  }

  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
        {title}
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
