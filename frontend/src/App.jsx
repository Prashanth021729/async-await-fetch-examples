import { useEffect, useState } from 'react'
import './index.css'
import Createtodo from './components/Createtodo'
import Todos from './components/Todos'

function App() {
  const [todo, setTodo] = useState([]);
  
  async function getData() {
    const response = await fetch("http://localhost:3001/todos");
    const data = await response.json();
    console.log(data);
    setTodo(data.todos);
  }

  useEffect(()=>{
    getData();
  },[])

  return (
    <>
      <div>
        <h1 className='text-5xl text-center mt-10'>Tasks to Complete</h1>
      </div>
      <div className=''>
       <Createtodo/> 
       <Todos todo= {todo}/>
       </div>
    </>
  )
}

export default App
