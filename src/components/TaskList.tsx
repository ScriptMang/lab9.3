import type { TaskListProps } from ".././types";
import type { Task } from ".././types";
import TaskItem from ".././components/TaskItem"


function TaskList({tasks, onStatusChange, onDelete}: TaskListProps){
    return(
        <>
         <ul>
          <TaskItem task= {tasks[0] as Task} onStatusChange={onStatusChange} onDelete={onDelete} />
         </ul>
        </>
    )
}

export default TaskList