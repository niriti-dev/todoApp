import { useState } from 'react'

function InputCard(props) {
    const { addNewTodo } = props 
    const [ todoText, setTodoText ] = useState("") 


    return(
        <>  
        <div>
            <input type="text"
            value = {todoText}
            onChange={(e) => {console.log(todoText); setTodoText(e.target.value)}}
            placeholder="Add new Todo"
            />
        </div>

        <div>
            <button
                onClick={
                    () => {
                        addNewTodo(todoText)
                        setTodoText('')
                    }
                }
            >Add</button>
        </div>
        
        </>
        

    )
}

export default InputCard
