

function Navigation() {
    const tabs = ['AlL', 'Open', 'Done']
    return(

        <>
            <div>
                {
                    tabs.map((tab, tabIdx) => {
                        return <button id={tabIdx}>{tab} ({10})</button>
                    })

                }

            </div>
        
        </>
    ) 

}

export default Navigation 