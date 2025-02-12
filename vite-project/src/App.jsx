import { use, useState } from 'react'
import reactLogo from './assets/react.svg'


import Header from './Header.jsx'
import Navigation from './Navigation.jsx'
import TodoList from './TodoList.jsx'

function App() {
  const [ tab, setTab ] = useState('All')

  //CONSIDERATION 2 [ANOTHER ONE IN TodoList.jsx - CONSIDERATION ONE]

  const [todos, setTodos] = useState(
    [
    {input: "go to the gym", isComplete: false}, 
    {input: "finish react project", isCompleted: false}
    ]
  
  )   
  function changeTodos(idx, toDelete=false) {
    let newTodo; 
    if (toDelete) {
      newTodo = todos.filter((todo, todoIdx) => todoIdx === idx)
    }
    else {
      newTodo = [...todos]
      newTodo[idx].isCompleted = true
    }
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
