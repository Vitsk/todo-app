import React from 'react'

export const TaskItem = ({ id, title, description, index, userId, deleteTask }) => {
  const deleteTaskHandler = () => {
    deleteTask(userId, id)
  }

  return (
    <>
      <div className="accordion-item mt-2">
        <h2 className="accordion-header" id={`flush-heading${index}`}>
          <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${index}`} aria-expanded="false" aria-controls={`flush-collapse${index}`}>
            <div className="d-flex justify-content-between w-100">
              {title}
              <button 
                type="button" 
                className="btn-close" 
                aria-label="Close"
                onClick={deleteTaskHandler}
              ></button>
            </div>
          </div>
        </h2>
        <div id={`flush-collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${index}`} data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">{description}</div>
        </div>
      </div>
    </>
  )
}
