import TodoCard from './TodoCard'

function TodoList(props) {
    let { todos, currTab} = props 
    

    if (currTab != 'All') {
        todos = (currTab === "Done") ? 
        todos.filter(todo => todo.isComplete): 
        todos.filter(todo => !todo.isComplete);
    }

    return (
        <>
            {
                
                todos.map((todo, todoIdx) => {
                    return <TodoCard id={todoIdx} 
                    todo={todo}
                    />

                })
            }

        </>

    )

}





export default TodoList 