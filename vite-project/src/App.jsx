import { useState } from 'react'
import reactLogo from './assets/react.svg'


import Header from './Header.jsx'
import Navigation from './Navigation.jsx'
import TodoList from './TodoList.jsx'

function App() {
  const todos = [
    {input: "go to the gym", isComplete: false}, 
    {input: "finish react project", isCompleted: false}
  ]

  return (
    <>
     <Header todos={todos}/>
     <Navigation todos={todos}/>
     <TodoList todos={todos}/>
     
    </>
  )
}

export default App
