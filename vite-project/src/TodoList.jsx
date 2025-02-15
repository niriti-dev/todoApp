import TodoCard from './TodoCard'

function TodoList(props) {

    let { selectedTab, todos, handleDeleteTodo} = props 



    if (selectedTab !== 'All') {
        todos = (selectedTab === "Done") ? 
        todos.filter(todo => todo.isComplete): 
        todos.filter(todo => !todo.isComplete)
    }
    console.log('from todo list')
    console.log(selectedTab, todos)

    return (
        <>
            {   
                todos.map((todo, todoIdx) => {
                    return <TodoCard key={todoIdx} 
                    todo={todo}
                    todoIdx = {todoIdx}
                    {...props}
                    />

                })
            }

        </>

    )

}


export default TodoList 