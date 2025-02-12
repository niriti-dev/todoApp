import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import { v4 as uuidv4 } from 'uuid'


import Header from './Header.jsx'
import Navigation from './Navigation.jsx'
import TodoList from './TodoList.jsx'

function App() {
  const [ tab, setTab ] = useState('All')

  //CONSIDERATION 2 [ANOTHER ONE IN TodoList.jsx - CONSIDERATION ONE]

  const [todos, setTodos] = useState(
    [
    {id: uuidv4(), input: "go to the gym", isComplete: false}, 
    {id: uuidv4(), input: "finish react project", isComplete: false}
    ]
  
  )   
  function changeTodos(idx, toDelete=false) {
    let newTodo; 
    if (toDelete) {
      newTodo = todos.filter((todo, todoIdx) => todoIdx === idx)
    }
    else {
      console.log('ehfiwejfwej boop boop ')
      console.log(idx)
      newTodo = todos.map((todo) => (todo.id === idx)? ({...todo, isComplete:true}): (todo)  ) 
    }
    console.log(newTodo)
    setTodos(newTodo)
    
  }


  return (
    <>

     <Header todos={todos} tab={tab}/>
     <Navigation todos={todos} changeTab={setTab}/>
     <TodoList currTab = {tab} todos={todos} changeTodos = {changeTodos}/>
    
    </>
  )
}

export default App
