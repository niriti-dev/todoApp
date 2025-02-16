import { useState } from 'react'

function TodoInput(props) {
    const { handleAddTodo } = props 
    const [ inputValue, setInputValue ] = useState("") 


    return(
 
        <div className="input-container">
            <input type="text"
            className="input-container"
            value = {inputValue}
            onChange={(e) => {setInputValue(e.target.value)}}
            placeholder="Add new Todo"
            />

            <button 
            onClick={() => {
                if (!inputValue) 
                    return 
                handleAddTodo(inputValue)
                setInputValue('')
                }
                }>             
            <i class="fa-solid fa-plus"></i>

            </button>
            
                    
        </div>

    )

}


export default TodoInput
