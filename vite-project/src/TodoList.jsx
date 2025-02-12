import TodoCard from './TodoCard'

function TodoList(props) {

    // by destructing props, I get a useState function from another component 
    let { currTab, todos, changeTodos} = props 



    // CONSIDERATION ONE: [ANOTHER ONE IN APP.JSX ]
    //should I set my OWN component as well? 
    // whenever 'done' or 'delete' gets pressed from one of my TodoCards
    // change state loosely translates to change the entire filter mechanism 
    // aka you have to change the todos 
    // you create a helper function, and insdie the helper function you 


    if (currTab != 'All') {
        todos = (currTab === "Done") ? 
        todos.filter(todo => todo.isComplete): 
        todos.filter(todo => !todo.isComplete);
    }

    return (
        <>
            {
                
                todos.map((todo, todoIdx) => {
                    return <TodoCard key={todoIdx} 
                    todo={todo}
                    todoIdx = {todoIdx}
                    changeTodos={changeTodos}
                    />

                })
            }

        </>

    )

}





export default TodoList 