function TodoCard(props) {
    const { todo, todoIdx, handleDeleteTodo, handleCompleteTodo } =  props 

  
    return(
        <>
            <div className="card todo-item">
                    <p> {todo.input} </p>
                    <div className="todo-button">

                        <button disabled={todo.isComplete}
                        onClick={() => {handleCompleteTodo(todoIdx)}}
                        >
                            Done
                        </button>

                        <button onClick={() => {console.log('delete'); handleDeleteTodo(todoIdx)}}>
                            Detele 
                        </button>

                    </div>
                    
            </div>


        </>

    ) 

}

export default TodoCard 