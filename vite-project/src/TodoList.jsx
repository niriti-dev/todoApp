import TodoCard from './TodoCard'

function TodoList(props) {

    let { tab, todos} = props 



    if (tab !== 'All') {
        todos = (tab === "Done") ? 
        todos.filter(todo => todo.isComplete): 
        todos.filter(todo => !todo.isComplete)
    }
    console.log('from todo list')
    console.log(tab, todos)

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