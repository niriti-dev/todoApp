


function Navigation(props) {
    console.log('props:', props);  // Debugging step

    const { todos, changeTab} = props 
    console.log('change tab function:', typeof changeTab); 

    const tabs = ['All', 'Open', 'Done']

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
                        return (
                            <button 
                                id={tabIdx}
                                onClick={() => {console.log(tab); changeTab(tab)}}
                            >
                        
                                {tab}({taskCount})
                
                            </button> )
                    
                    })

                }

            </div>
        
        </>
    ) 

}


export default Navigation 