import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import { v4 as uuidv4 } from 'uuid'


import Header from './Header.jsx'
import Navigation from './Navigation.jsx'
import TodoList from './TodoList.jsx'
import TodoInput from './TodoInput.jsx'

function App() {
  const [ selectedTab, setSelectedTab ] = useState('Open')

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

  function handleDeleteTodo(index) {
    const newTodoList  = todos.filter((todo, todoIdx) => todoIdx !== index)
    setTodos(newTodoList)

  }
  
  function handleCompleteTodo(index){
    const doneTodo = todos[index] 
    doneTodo.isComplete = true 
    setTodos(todos.map((todo) => todo.index === index? (doneTodo) : (todo)))

  }

  

  
  return (
    <>
      <Header todos={todos}/>
      <Navigation todos={todos} selectedTab= {selectedTab} changeTab={changeTab}/>
      <TodoList selectedTab={selectedTab} todos={todos} handleDeleteTodo={handleDeleteTodo} handleCompleteTodo={handleCompleteTodo}/>
      <TodoInput handleAddTodo={handleAddTodo}/>
      
      </>
  )
}

export default App
