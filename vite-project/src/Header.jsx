

function Header(props) {
    const { todos } = props; 
    
    const remainingTasks = todos.filter(todo => !todo.isComplete).length;
    const taskOrTasks = remainingTasks === 1 ? 'task' : 'tasks';

    return (
        <header>
            <h1 className="text-gradient ">
                You have {remainingTasks} {taskOrTasks} remaining
            </h1>
        </header>
    );
}

export default Header   