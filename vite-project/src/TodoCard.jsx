function TodoCard(prop) {
    const { todo } = prop
  
    return(
        <>
            <div>
                <div>
                    <p>{todo.input}</p>
                </div>

                <div>
                    <button>
                        Done
                    </button>

                    <button>
                        Detele 
                    </button>
                </div>
            </div>


        </>

    ) 

}

export default TodoCard 