import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import { v4 as uuidv4 } from 'uuid'


import Header from './Header.jsx'
import Navigation from './Navigation.jsx'
import TodoList from './TodoList.jsx'
import InputCard from './InputCard.jsx'

function App() {
  const [ tab, setTab ] = useState('All')

  //CONSIDERATION 2 [ANOTHER ONE IN TodoList.jsx - CONSIDERATION ONE]

  const [todos, setTodos] = useState(
    [
    {id: uuidv4(), input: "go to the gym", isComplete: false}, 
    {id: uuidv4(), input: "finish react project", isComplete: false}
    ]
  
  )   

  // i could probably pacakge this into a object and pass this object in 
  function changeTodos(idx, toDelete=false) {
    if (toDelete) {
      return setTodos(todos.filter((todo, todoIdx) => todo.id === idx))
    }
    else{
      return setTodos(todos.filter((todo) => todo.id == idx) )
    }
    
  }

  function addNewTodo(newText) {
    return setTodos([...todos, {id: uuidv4(), input: newText, isComplete: false}]) 
  }
  


  return (
    <>
      <Header todos={todos} tab={tab}/>
      <Navigation todos={todos} changeTab={setTab}/>
      <TodoList currTab = {tab} todos={todos} changeTodos = {changeTodos}/>
      {/* {
        currTab !== "Done" ? <InputCard addNewTodo={addNewTodo} /> : null
      } */}

    <InputCard addNewTodo={addNewTodo} />
      
      </>
  )
}

export default App
