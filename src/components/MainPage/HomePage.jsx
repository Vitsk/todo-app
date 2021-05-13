import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {
  addTask,
  deleteTask,
  getTasks,
  doneTask,
  changingTitle
} from '../../redux/tasks/thunks'
import { TaskItem } from './TaskItem'

const HomePage = ({
  tasks,
  userId,
  getTasks,
  addTask,
  deleteTask,
  doneTask,
  changingTitle
}) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [focusInput, setFocusInput] = useState(false);

  useEffect(() => {
    getTasks(userId);
  }, [userId, getTasks])

  const addHandler = (e) => {
    e.preventDefault();
    if (taskTitle) {
      addTask(userId, Date.now(), taskTitle)
      setTaskTitle('')
    }
  }

  return (
    <>
      <div className="container d-flex justify-content-center">
        <div className="w-50 mt-5">
          <div className="d-flex row justify-content-center">
            <form onSubmit={addHandler} className="text-center mb-3">
              {focusInput ? <input
                type="text"
                className="input"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                onBlur={() => setFocusInput(false)}
                autoFocus
              />
                : <button
                  className="btn btn-secondary"
                  type='button'
                  onFocus={() => setFocusInput(true)}
                >Add task</button>
              }
            </form>

            <div className="card" style={{ width: '20rem' }}>
              <ul className="list-group list-group-flush">
                {tasks.map((item, index) => (
                  <TaskItem
                    key={index}
                    id={item.id}
                    title={item.title}
                    done={item.done}
                    userId={userId}
                    doneTask={doneTask}
                    changingTitle={changingTitle}
                    deleteTask={deleteTask}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasksReducer.tasks,
    userId: state.auth.userId
  }
}

const mapDispatchToProps = {
  getTasks,
  addTask,
  doneTask,
  changingTitle,
  deleteTask
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);