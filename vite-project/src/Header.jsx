function Header({ todos }) {
    const remainingTasks = todos.filter(todo => !todo.isComplete).length;
    const taskOrTasks = remainingTasks === 1 ? 'task' : 'tasks';
  
    return (
      <nav className="header">
        <div className="logo">
          <h1>You have {remainingTasks} {taskOrTasks} remaining</h1>
        </div>
      </nav>
    );
  }
  
  export default Header;
  