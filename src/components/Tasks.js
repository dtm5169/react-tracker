
import Task from "./Task"

//components
const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <>
            {tasks.map((task) => ( //.map creates a lists
                <Task key={task.id} task={task}
                    onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </>
    )
}

export default Tasks