


function Navigation(props) {
    const tabs = ['AlL', 'Open', 'Done']
    const { todos } = props 

    return(

        <>
            <div>
                {
                    tabs.map((tab, tabIdx) => {
          
                        // logic to get the number of tasks for each tabs 
                        const taskCount = (tab === "All")? todos.length
                        : (tab === "Done") 
                            ? todos.filter(todo => todo.isComplete).length
                            : todos.filter(todo => !todo.isComplete).length;
                    

                        // jsx component: the indivisual button tab 
                        return <button id={tabIdx}>{tab} ({taskCount})</button> 
                    
                    })

                }

            </div>
        
        </>
    ) 

}


export default Navigation 