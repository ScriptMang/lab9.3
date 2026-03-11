import type {TaskFilterProps} from './../types/index.ts'
import type {TaskStatus} from './../types/index'

// export interface TaskFilterProps {
//   onFilterChange: (filters: {
//     status?: TaskStatus;
//     priority?: 'low' | 'medium' | 'high';
//   }) => void;
// }

function TaskFilter({onFilterChange}:TaskFilterProps ){
    return (
        <>
        <select defaultValue="All Statuses" onChange={(e) => onFilterChange({status: e.target.value as TaskStatus})}>
            <option value="pending">pending</option>
            <option value="in-progress">in-progress</option>
            <option value="completed">completed</option>
            <option value="All Statuses">All Statues</option>
        </select>

         <select defaultValue="All Priorities" onChange={(e) => onFilterChange({priority: (e.target.value as 'low'|'medium'|'high')})}>
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
            <option value="All Priorities">All Priorities</option>
        </select>
        </>
    )
}

export default TaskFilter