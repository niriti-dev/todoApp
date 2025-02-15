function TodoCard(props) {
    const { todo } = props 

  
    return(
        <>
            <div className="card todo-item">
                    <p> {todo.input} </p>
                    <div className="todo-button">

                        <button disabled={todo.isComplete}>
                            Done
                        </button>

                        <button >
                            Detele 
                        </button>

                    </div>
                    
            </div>


        </>

    ) 

}

export default TodoCard 