function TodoCard(prop) {
    const { todo, changeTodos} = prop

  
    return(
        <>
            <div>
                <div>
                    <p>{todo.input}</p>
                </div>

                <div>
                    {//  when done is clicked this item should have a minor change: isComplete = true 
                    }
                    <button onClick={() => {console.log('done', todo.id); changeTodos(todo.id)}}>
                        Done

                    </button>

                    {//  when delete is clicked this item should be removed from my list completely 
                    }

                    <button onClick={() => {console.log('delete'); changeTodos(todo.id, true)}}>
                        Detele 
                    </button>
                </div>
            </div>


        </>

    ) 

}

export default TodoCard 