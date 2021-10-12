// x icon
import { FaTimes } from 'react-icons/fa'

//create a component
const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div
            className={`task ${task.reminder ?
            'reminder' : ''}`}
            onDoubleClick={() => onToggle(task.id)}
        >
            <h3>
             {task.text}{' '}
             <FaTimes
               style={{ color: 'red', cursor:
                'pointer'}}
                onClick={() => onDelete(task.id)}
            />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}
//state get passed down, actions get passed up
export default Task