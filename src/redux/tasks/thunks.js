import { database } from "../../firebase"
import { setTasks } from './actions'

export const getTasks = (userId) => (dispatch) => {
  let ref = database.ref(`${userId}/tasks/`);

  ref.on('value', (snapshot) => {
    const data = snapshot.val();
    
    let tasks = Object.keys(data || []).map(key => {
      return {
        ...data[key],
      }
    })

    console.log(tasks)
    dispatch(setTasks(tasks.reverse()))
  });
}

export const addTask = (userId, id, title, description) => (dispatch) => {
  let ref = database.ref(`${userId}/tasks/${id}`);

  ref.set({
    id,
    title,
    description
  })
}

export const deleteTask = (userId, id) => (dispatch) => {
  let ref = database.ref(`${userId}/tasks/${id}`);

  ref.remove()
}