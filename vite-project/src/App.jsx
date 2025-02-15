import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import { v4 as uuidv4 } from 'uuid'


import Header from './Header.jsx'
import Navigation from './Navigation.jsx'
import TodoList from './TodoList.jsx'
import TodoInput from './TodoInput.jsx'

function App() {
  const [ selectedTab, setSelectedTab ] = useState('All')

  function changeTab(tab) {
    console.log(tab)
    setSelectedTab(tab); 
  }


  const [todos, setTodos] = useState(
    [
    {input: "go to the gym", isComplete: false}, 
    {input: "finish react project", isComplete: false}
    ]
  
  )   

  function handleAddTodo(newTodo) {
    setTodos([...todos, {input: newTodo, isComplete:false}])

  }

  return (
    <>
      <Header todos={todos}/>
      <Navigation todos={todos} selectedTab= {selectedTab} changeTab={changeTab}/>
      <TodoList selectedTab={selectedTab} todos={todos} />
      <TodoInput handleAddTodo={handleAddTodo}/>
      
      </>
  )
}

export default App
