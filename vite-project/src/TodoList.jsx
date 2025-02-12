import TodoCard from './TodoCard'

function TodoList(props) {
    const { todos } = props 

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