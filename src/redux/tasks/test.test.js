import tasksReducer from './reducer'
import { setTasks } from './actions'

let initialState = {
  tasks: []
}

it('new task should be added', () => {
  let action = setTasks([
    { id: 123, description: "lul", title: 'kek' },
    { id: 123, description: "lul", title: 'kek' },
    { id: 123, description: "lul", title: 'kek' },
    { id: 123, description: "lul", title: 'kek' }
  ]);
  let newState = tasksReducer(initialState, action)

  expect(newState.tasks.length).toBe(4);
})