import { use, useState } from 'react'
import reactLogo from './assets/react.svg'


import Header from './Header.jsx'
import Navigation from './Navigation.jsx'
import TodoList from './TodoList.jsx'

function App() {
  const [ tab, setTab ] = useState('All')
   
  const todos = [
    {input: "go to the gym", isComplete: false}, 
    {input: "finish react project", isCompleted: false}
  ]

  // default 'state' = Open 
  // when function triggered; open changes to whatever clicked 
  // you send the state into the todoList props 
  // { tab setTab} = useState('Open')
  // < Navigation todos={todos} />
  return (
    <>
     <Header todos={todos} tab={tab}/>
     <Navigation todos={todos} changeTab={setTab}/>
     <TodoList todos={todos} currTab = {tab}/>
     
    </>
  )
}

export default App
