import { SET_TASKS } from "./actionCreators";

const initialState = {
  tasks: []
}

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASKS:
      return {
        ...state,
        tasks: action.tasks
      }

    default:
      return state;
  }
}

export default tasksReducer;