import TodoCard from './TodoCard'

function TodoList(props) {
    const { tab, todos } = props 



    if (tab !== 'All') {
        todos = (currTab === "Done") ? 
        todos.filter(todo => todo.isComplete): 
        todos.filter(todo => !todo.isComplete);
    }
    console.log(todos)

    return (
        <div>
            {
                todos.map((todo, todoIdx) => {

                    return (
                    <TodoCard key={todoIdx} 
                        todo= {todo}/>
                  ) 

                })
            }

        </div>

    )

}





export default TodoList 