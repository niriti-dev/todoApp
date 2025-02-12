
function InputCard(props) {
    const { addTodo } = props 

    return(
        <>  
        <div>
            <input type="text"
            placeholder="Add new Todo"
            />
        </div>

        <div>
            <button>Add</button>
        </div>
        
        </>
        

    )
}

export default InputCard
