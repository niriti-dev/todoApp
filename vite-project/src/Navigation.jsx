


function Navigation(props) {

    const { todos, changeTab} = props 

    const allTabs = ['All', 'Open', 'Done']

    return(
            <nav className='tab-container'>
                {
                    allTabs.map((tab, tabIdx) => {
          
                        const taskCount = (tab === "All")? todos.length
                        : (tab === "Done") 
                            ? todos.filter(todo => todo.isComplete).length
                            : todos.filter(todo => !todo.isComplete).length;
                    
                        return (
                                <button 
                                    className='tab-button'
                                    key={tabIdx}
                                    onClick={() => {changeTab(tab)}}
                                >
                                <h4>
                                    {tab} <span> ({taskCount})</span>
                                </h4>
                
                                </button>


                             )
                    
                    })

                }

            </nav>
        
    ) 

}


export default Navigation 