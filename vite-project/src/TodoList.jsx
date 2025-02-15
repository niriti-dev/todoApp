import TodoCard from './TodoCard'

function TodoList(props) {

    let { selectedTab, todos} = props 



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
                    />

                })
            }

        </>

    )

}


export default TodoList 