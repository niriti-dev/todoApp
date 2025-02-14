function Navigation(props) {
    const { todos, changeTab, activeTab } = props;
    const tabs = ['All', 'Open', 'Done'];
  
    return (
      <div className="nav-tabs">
        {tabs.map((tab, idx) => {
          const taskCount =
            tab === "All"
              ? todos.length
              : tab === "Done"
              ? todos.filter(todo => todo.isComplete).length
              : todos.filter(todo => !todo.isComplete).length;
  
          return (
            <button
              key={idx}
              className={`tab-button ${activeTab === tab ? 'active' : ''}`}
              onClick={() => changeTab(tab)}
            >
              {tab} ({taskCount})
            </button>
          );
        })}
      </div>
    );
  }
  
  export default Navigation;
  