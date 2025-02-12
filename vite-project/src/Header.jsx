

function Header(props) {
    const { todos } = props; 
    
    const remainingTasks = todos.filter(todo => !todo.isComplete).length;
    const taskOrTasks = remainingTasks === 1 ? 'task' : 'tasks';

    return (
        <>
            <h1>
                You have {remainingTasks} {taskOrTasks} remaining
            </h1>
        </>
    );
}

export default Header   