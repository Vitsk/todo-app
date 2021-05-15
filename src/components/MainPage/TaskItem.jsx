import React, { useState } from 'react'

export const TaskItem = ({
  id,
  title,
  userId,
  done,
  deleteTask,
  doneTask,
  changingTitle
}) => {
  const [inputTitleSwitcher, setInputTitleSwitcher] = useState(false);
  const [inputTitleValue, setInputTitleValue] = useState('');

  const inputSwitchHandler = () => {
    setInputTitleSwitcher(true); 
    setInputTitleValue(title)
  }

  const changingTitleHandler = () => {
    if (inputTitleValue) {
      changingTitle(userId, id, inputTitleValue);
    }
    setInputTitleSwitcher(false)
  }

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
        {
          inputTitleSwitcher ?
            <input
              type='text'
              value={inputTitleValue}
              onChange={(e) => setInputTitleValue(e.target.value)}
              onBlur={changingTitleHandler}
              autoFocus
            />
            :
            <span
              className="title-text"
              onClick={inputSwitchHandler}
            >{title}</span>
        }
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

export const TaskItemMemo = React.memo(TaskItem);