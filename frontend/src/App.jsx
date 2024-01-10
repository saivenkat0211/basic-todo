
import react,{ useState } from 'react'

import CreateTodo from './Components/CreateTodo'
import './App.css'
import AllTodos from './Components/AllTodos'
function App() {
  const [todos,setTodos] = useState([])
  
  fetch("http://localhost:4004/todolist").then(
  async function(response){
    const json = await response.json();
    setTodos(json)

  }
)

  // console.log(data)

    
  
  
  return (
    <div>
      <CreateTodo todos = {todos} setTodos = {setTodos}/>
      <AllTodos todos ={todos} ></AllTodos>
    </div>
        
  )
}

export default App
