import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { addTask, deleteTask, getTasks } from '../../redux/tasks/thunks'
import { TaskItem } from './TaskItem'

const HomePage = ({ tasks, userId, getTasks, addTask, deleteTask }) => {
  const [taskTitle, setTaskTitle] = useState('');

  useEffect(() => {
    getTasks(userId);
  }, [userId, getTasks])

  const addHandler = (e) => {
    e.preventDefault();
    addTask(userId, Date.now(), taskTitle)
    setTaskTitle('')
  }

  return (
    <>
      <div className="container d-flex justify-content-center">
        <div className="w-50 mt-5">
          <form onSubmit={addHandler} className="text-center">
            <input
              type="text"
              className="input"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
            <button className="btn btn-secondary" type='submit'>Add task</button>
          </form>

          <div className="card" style={{ width: '18rem' }}>
            <ul className="list-group list-group-flush">
              {tasks.map((item, index) => (
                <TaskItem
                  key={index}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  userId={userId}
                  deleteTask={deleteTask}
                />
              ))}
            </ul>
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
  deleteTask
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);