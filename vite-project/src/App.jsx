import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import { v4 as uuidv4 } from 'uuid'


import Header from './Header.jsx'
import Navigation from './Navigation.jsx'
import TodoList from './TodoList.jsx'
import TodoInput from './TodoInput.jsx'
import { cache } from 'react'

function App() {

  const [ selectedTab, setSelectedTab ] = useState('Open')

  function changeTab(tab) {
    console.log(tab)
    setSelectedTab(tab); 
  }
  
  const cacheKey = 'my-todo'
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem(cacheKey);
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  
  useEffect(() => {    
    localStorage.setItem(cacheKey, JSON.stringify(todos));
  }, [todos]);
  

  function handleAddTodo(newTodo) {
    setTodos([...todos, {input: newTodo, isComplete:false}])

  }

  // function handleDeleteTodo(index) {
  //   console.log
  //   const newTodoList  = todos.filter((todo, todoIdx) => todoIdx !== index)
  //   setTodos(newTodoList)

  // }

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index
    })
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }
  


  function handleCompleteTodo(index) {
    // update/edit/modify
    let newTodoList = [...todos]
    let completedTodo = todos[index]
    completedTodo['isComplete'] = true
    newTodoList[index] = completedTodo
    setTodos(newTodoList)
    handleSaveData(newTodoList)
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
