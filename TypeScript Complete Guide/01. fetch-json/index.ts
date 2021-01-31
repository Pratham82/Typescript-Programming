import axios from 'axios'
// We can define the structure of an object/variable which is coming in
interface Todo {
  id: number
  title: string
  completed: boolean
}

axios.get('https://jsonplaceholder.typicode.com/todos/2').then(res => {
  const { id, title, completed } = res.data as Todo
  logTodo(id, title, completed)
})

const logTodo = (id: number, title: string, completed: boolean): void =>
  console.log(
    `The todo with id: ${id}\nHas a title: ${title}\nStatus: ${
      completed ? 'Completed' : 'Not Completed'
    }`
  )
