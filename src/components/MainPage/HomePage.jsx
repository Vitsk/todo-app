import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getTasks, addTask, deleteTask } from '../../redux/tasks/thunks'
import { Modal } from './Modal'
import { TaskItem } from './TaskItem'

const HomePage = ({ tasks, userId, getTasks, addTask, deleteTask }) => {
  useEffect(() => {
    getTasks(userId);
  }, [getTasks, userId])

  return (
    <>
      <div className="container d-flex justify-content-center">
        <div className="w-50 mt-5">
          <div className="text-center">
            <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Add task
            </button>
          </div>
          <div className="accordion" id="accordionFlushExample">
            {tasks.map((item, index) => (
              <TaskItem
                key={index}
                index={index}
                id={item.id}
                title={item.title}
                description={item.description}
                userId={userId}
                deleteTask={deleteTask}
              />
            ))}
          </div>
        </div>
      </div>

      <Modal 
        addTask={addTask}
        userId={userId}
      />
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