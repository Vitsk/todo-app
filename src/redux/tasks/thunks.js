import { database } from "../../firebase"
import { setTasks } from './actions'

export const getTasks = () => (dispatch) => {
  let ref = database.ref('/');

  ref.on('value', (snapshot) => {
    const data = snapshot.val();
    
    let tasks = Object.keys(data || []).map(key => {
      return {
        ...data[key],
      }
    })

    console.log(tasks)
    dispatch(setTasks(tasks))
  });
}

export const addTask = (title) => (dispatch) => {
  let ref = database.ref(`tasks/${Date.now()}`);

  ref.set({
    title
  })
}