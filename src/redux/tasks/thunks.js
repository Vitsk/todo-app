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

    dispatch(setTasks(tasks.reverse()))
  });
}

export const addTask = (userId, id, title) => (dispatch) => {
  let ref = database.ref(`${userId}/tasks/${id}`);

  ref.set({
    id,
    title,
    done: false
  })
}

export const changingTitle = (userId, id, title) => (dispatch) => {
  let ref = database.ref(`${userId}/tasks/${id}`);

  ref.update({
    title
  })
}

export const doneTask = (userId, id, done) => (dispatch) => {
  let ref = database.ref(`${userId}/tasks/${id}`);

  ref.update({
    done
  })
}

export const deleteTask = (userId, id) => (dispatch) => {
  let ref = database.ref(`${userId}/tasks/${id}`);

  ref.remove()
}