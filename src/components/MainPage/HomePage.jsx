import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getTasks, addTask } from '../../redux/tasks/thunks'

const HomePage = ({ getTasks, addTask }) => {
  useEffect(() => {
    getTasks();
  }, [getTasks])

  return (
    <>
      <div className="main-header">
        
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasksReducer.tasks
  }
}

const mapDispatchToProps = {
  getTasks,
  addTask
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);