import { SET_TASKS } from "./actionCreators";

const setTasks = (tasks) => ({ type: SET_TASKS, tasks })

export {
  setTasks
}